// Google Analytics 工具函数

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

let gaMeasurementId: string = '';

// 初始化 Google Analytics
export const initGA = (measurementId: string) => {
  if (typeof window === 'undefined') return;
  
  gaMeasurementId = measurementId;

  // 创建 dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_path: window.location.pathname + window.location.search + window.location.hash,
  });
};

// 发送页面浏览事件
export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag || !gaMeasurementId) return;
  
  window.gtag('config', gaMeasurementId, {
    page_path: url,
  });
};

// 发送自定义事件
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

