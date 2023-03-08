// @ts-nocheck comment
import React from 'react';
import Link from 'next/link';
import { BootstrapTooltip } from './BootstrapTooltip';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { socials } from '../data/join';

const routes: any = {
  Home: '/',
  Events: '/events',
  'Jobs Board': '/jobs-board',
  'Join Us': '/join-us',
  'Our Story': '/about/our-story',
  Sponsors: '/sponsors',
  'Our Team': '/about/our-team',
  'Contact Us': '/contact-us',
  'Blog Posts': '/media/blog',
  Podcast: '/media/podcast',
  Publications: '/media/publications',
  Marketing: '/media/marketing',
  Videos: '/media/videos',
};

const headings = ['STUDENT INVOLVEMENT', 'ABOUT US', 'MEDIA'];

const links = [
  ['Home', 'Events', 'Jobs Board', 'Join Us'],
  ['Our Story', 'Sponsors', 'Our Team', 'Contact Us'],
  ['Blog Posts', 'Podcast', 'Publications', 'Marketing', 'Videos'],
];

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="footer-all">
          <div className="grid-footer-container">
            <li className="col-width footer-item footer-logo">
              <div className={styles.footerLogoWhite}>
                <Image
                  src="/logo-white.png"
                  alt="wit logo"
                  width={45}
                  height={40}
                />
              </div>
              <div className={styles.footerLogoBlack}>
                <Image
                  src="/logo-black.png"
                  className="footer-logo-black"
                  alt="wit logo"
                  width={45}
                  height={40}
                />
              </div>
            </li>
            {links.map((col, index) => {
              return (
                <div key={index} className="col-width footer-links">
                  <li className="footer-item footer-header">
                    {' '}
                    {headings[index]}{' '}
                  </li>
                  {col.map((route) => {
                    return (
                      <li className="footer-item" key={route}>
                        <Link href={routes[route] || '/'} legacyBehavior>
                          {route}
                        </Link>
                      </li>
                    );
                  })}
                </div>
              );
            })}
            <div className="col-width socials">
              <div className="socials-subheading">
                <li className="footer-item footer-header">
                  {' '}
                  FOLLOW OUR SOCIALS{' '}
                </li>
              </div>
              <div className="footer-item">
                <div className="square-link">
                  {Object.keys(socials).map((social) => {
                    return (
                      <span key={social} className="footer-icons">
                        <BootstrapTooltip
                          key={social}
                          title={
                            <>
                              <div className="tooltipTitle">{social}</div>
                            </>
                          }
                        >
                          <a
                            href={socials[social][0]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={`/icons/${socials[social][1]}`}
                              alt={social}
                              width="40"
                              height="40"
                            />
                          </a>
                        </BootstrapTooltip>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </ul>
        <div className="footer-copyright bottom-footer-item">
          Copyright © {new Date().getFullYear()}. UNSW Women in Technology
        </div>
      </footer>
    </div>
  );
};

export default Footer;
