import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="menu mb-5 ">
      <Link href="/" legacyBehavior>
        <a className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
          </span>
          <span className="link-title">Home</span>
        </a>
      </Link>

      <Link href="/business" legacyBehavior>
        <a className="link">
          <span className="link-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
            <path d="M2 14C2 11.1911 2 9.78661 2.67412 8.77772C2.96596 8.34096 3.34096 7.96596 3.77772 7.67412C4.78661 7 6.19108 7 9 7H15C17.8089 7 19.2134 7 20.2223 7.67412C20.659 7.96596 21.034 8.34096 21.3259 8.77772C22 9.78661 22 11.1911 22 14C22 16.8089 22 18.2134 21.3259 19.2223C21.034 19.659 20.659 20.034 20.2223 20.3259C19.2134 21 17.8089 21 15 21H9C6.19108 21 4.78661 21 3.77772 20.3259C3.34096 20.034 2.96596 19.659 2.67412 19.2223C2 18.2134 2 16.8089 2 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 7C16 5.11438 16 4.17157 15.4142 3.58579C14.8284 3 13.8856 3 12 3C10.1144 3 9.17157 3 8.58579 3.58579C8 4.17157 8 5.11438 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 11L6.65197 11.202C10.0851 12.266 13.9149 12.266 17.348 11.202L18 11M12 12V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
          </span>
          <span className="link-title">Retail</span>
        </a>
      </Link>

      <Link href="/people" legacyBehavior>
        <a className="link">
          <span className="link-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
            <path d="M7 9L11.7707 4.73514C13.0647 3.57838 13.7117 3 14.5 3C15.2883 3 15.9353 3.57838 17.2293 4.73514L22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.5 8V20M20.5 20V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="3.5" cy="12" rx="1.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3.5 14V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 20H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 20V15.9997C12 15.0571 12 14.5858 12.2929 14.2929C12.5858 14 13.0572 14 14 14H15C15.9428 14 16.4142 14 16.7071 14.2929C17 14.5858 17 15.0572 17 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.5 11H15.5M13.5 8H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
          </span>
          <span className="link-title">House</span>
        </a>
      </Link>

      

      <style jsx>{`
        .menu {
          padding: 0.5rem;
          background-color: #fff;
          position: relative;
          display: flex;
          justify-content: center;
          border-radius: 15px;
          box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.075);
        }
        .link {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 50px;
          border-radius: 8px;
          position: relative;
          z-index: 1;
          overflow: hidden;
          transform-origin: center left;
          transition: width 0.2s ease-in;
          text-decoration: none;
          color: inherit;
        }
        .link:before {
          position: absolute;
          z-index: -1;
          content: "";
          display: block;
          border-radius: 8px;
          width: 100%;
          height: 100%;
          top: 0;
          transform: translateX(100%);
          transition: transform 0.2s ease-in;
          transform-origin: center right;
          background-color: #eee;
        }
        .link:hover,
        .link:focus {
          outline: 0;
          width: 130px;
        }
        .link:hover:before,
        .link:focus:before,
        .link:hover .link-title,
        .link:focus .link-title {
          transform: translateX(0);
          opacity: 1;
        }
        .link-icon {
          width: 28px;
          height: 28px;
          display: block;
          flex-shrink: 0;
          left: 18px;
          position: absolute;
        }
        .link-icon svg {
          width: 28px;
          height: 28px;
        }
        .link-title {
          transform: translateX(100%);
          transition: transform 0.2s ease-in;
          transform-origin: center right;
          display: block;
          text-align: center;
          text-indent: 28px;
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
