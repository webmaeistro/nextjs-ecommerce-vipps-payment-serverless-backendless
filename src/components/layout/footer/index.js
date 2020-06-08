import React from 'react';
import Link from 'next/link';

import IconNextjs from 'ui/icons/nextjs';
import { useSettings } from 'components/settings-context';

import { Outer, Logo, NavList, Powered } from './styles';
import IconLogo from 'ui/icons/logo';

export default function Footer() {
  const { mainNavigation } = useSettings();

  return (
    <Outer>
      <Link href="/">
        <a>
          <Logo>
            <img src="/static/ornforlag-logo.svg" alt="Ørn forlag " />
          </Logo>
        </a>
      </Link>
      <br />
      <div>
        {' '}
        <address>
          <strong>Ørn forlag</strong> <br />
          Veståsen 4<br />
          1362, Hosle, Norge
        </address>
        <br />
        <br />
        <strong>Org.nr.</strong>: 994304399 MVA <br />
        <strong>Kontonr.</strong>: 9235.27.10220
      </div>
      <NavList>
        <h5>Meny</h5>
        {mainNavigation.map((category) => (
          <li key={category.path}>
            <Link as={category.path} href="/[...catalogue]">
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </NavList>
      <Powered>
        <p>Nettside av: </p>
        <a href="https://github.com/webmaeistro/" aria-label="Martin-Andersen">
          Martin Andersen
        </a>
      </Powered>
      <br />
      <Powered>
        <p></p>
        <a href="https://crystallize.com" aria-label="Crystallize">
          <IconLogo size={2} />
        </a>{' '}
        <a href="https://nextjs.org/" aria-label="NextJs">
          <IconNextjs size={2} />
        </a>
      </Powered>
      <br />
      <br />
      <Powered>&copy; 2020 - Ørn forlag.</Powered>
    </Outer>
  );
}
