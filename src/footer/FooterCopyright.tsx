import { AppConfig } from '../utils/AppConfig';

export const FooterCopyright = () => (
  <div>
    © Copyright {new Date().getFullYear()} {AppConfig.title}.
  </div>
);
