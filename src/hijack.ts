type CustomWindow = typeof window & {clipboardData: DataTransfer};
type CustomClipboardEvent = ClipboardEvent & {originalEvent: ClipboardEvent};

const getClipboardData = (event: ClipboardEvent) => {
  const clipboardData: DataTransfer =
    event.clipboardData ||
    (window as CustomWindow).clipboardData ||
    (event as CustomClipboardEvent).originalEvent.clipboardData;
  return clipboardData;
};

const checkWatermark = (
  keywords: (string | RegExp)[],
  event: ClipboardEvent,
  callback: (watermark?: string) => void
) => {
  const clipboardData = getClipboardData(event);
  const data =
    clipboardData?.getData('text/plain') ||
    window.getSelection()?.toString() ||
    '';
  const oriData: string = clipboardData?.getData('sel:text/plain') || '';
  const extData: string = data.substring(oriData.length || data.length);
  if (extData.length === 0) {
    return;
  }
  const tmpData: string = extData.toLowerCase();
  const hasWatermark = keywords.some(keyword => tmpData.search(keyword));
  callback && callback(hasWatermark ? extData : undefined);
};

const removeWatermark = (event: ClipboardEvent) => {
  const target = event.target;
  const injectCopy = (
    event: Event & {stopPropagation: (exec?: boolean) => void}
  ) => {
    event.stopPropagation(true);
    target?.removeEventListener('copy', injectCopy);
  };
  target?.addEventListener('copy', injectCopy);
  document.execCommand('copy', true);
};

const copyHandler = (keywords: (string | RegExp)[]) => {
  const capturing = (event: ClipboardEvent) => {
    const stopPropagation = event.stopPropagation.bind(event);
    event.stopPropagation = (exec?: boolean) => {
      exec && stopPropagation();
    };
    const clipboardData = getClipboardData(event);
    const oriData: string = window.getSelection()?.toString() || '';
    clipboardData?.setData('sel:text/plain', oriData);
  };

  const bubbling = (event: ClipboardEvent) => {
    checkWatermark(keywords, event, watermark => {
      if (!watermark) {
        return;
      }
      console.log('Remove Copy From Watermark!\n' + watermark);
      setTimeout(() => removeWatermark(event));
    });
  };

  return {capturing, bubbling};
};

const hijack = (keywords?: (string | RegExp)[]) => {
  console.log('Hijack Remove Copy Watermark...');

  const handler = copyHandler(
    keywords || [
      'copyright',
      '版权',
      '著作権',
      '版權',
      '저작권',
      'Авторские права',
      window.location.href,
    ]
  );

  const addEventListener: typeof window.addEventListener &
    typeof document.addEventListener = window.addEventListener;

  addEventListener('copy', handler.capturing, true);
  addEventListener('copy', handler.bubbling, false);
};

export default hijack;
