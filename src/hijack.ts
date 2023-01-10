const checkWatermark = (
  keywords: (string | RegExp)[],
  event: ClipboardEvent,
  callback: (watermark?: string) => void
) => {
  let data: string;
  if ((event.clipboardData?.types || []).indexOf('text/plain') < 0) {
    data = window.getSelection()?.toString() || '';
  } else {
    data = event.clipboardData?.getData('text/plain') || '';
  }

  setTimeout(() => {
    const oriData: string = window.getSelection()?.toString() || '';
    const extData: string = data.substring(oriData.length);
    if (extData.length === 0) {
      return;
    }
    const tmpData: string = extData.toLowerCase();
    const hasWatermark = keywords.some(keyword => tmpData.search(keyword));
    callback && callback(hasWatermark ? extData : undefined);
  });
};

const removeWatermark = (event: ClipboardEvent) => {
  const target = event.target;
  const injectCopy = (event: Event) => {
    event.stopPropagation();
    target?.removeEventListener('copy', injectCopy);
  };
  target?.addEventListener('copy', injectCopy);
  document.execCommand('copy', true);
};

const copyHandler = (keywords: (string | RegExp)[]) => {
  const handler = (event: ClipboardEvent) => {
    checkWatermark(keywords, event, watermark => {
      if (!watermark) {
        return;
      }
      console.log('Remove Copy From Watermark!\n' + watermark);
      removeWatermark(event);
    });
  };
  return handler;
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

  addEventListener('copy', handler);
};

export default hijack;
