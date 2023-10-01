export const GA_MEASUREMENT_ID2 = process.env.GA_MEASUREMENT_ID2;
 
export const pageview = () => {
  window.gtag("config", GA_MEASUREMENT_ID2, {
    page_path: url,
  });
};
 
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};