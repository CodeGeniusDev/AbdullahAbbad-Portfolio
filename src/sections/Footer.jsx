const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/CodeGeniusDev">
          <div className="social-icon hover:bg-white-500 transition-colors">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/abdullah-abbad">
          <div className="social-icon hover:bg-white-500 transition-colors">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.instagram.com/codegenius.dev">
          <div className="social-icon hover:bg-white-500 transition-colors">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">
        © {new Date().getFullYear()}{' '}
        <a href="/" className="text-white hover:text-white-700 transition-colors">
          Abdullah Abbad
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
