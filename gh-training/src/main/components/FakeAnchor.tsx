import React from 'react';

export interface FakeAnchorProps {
  href: string;
  children: React.ReactNode;
}

export function FakeAnchor(props: FakeAnchorProps) {
  return (
    <a href={props.href} onClick={handleClick}>
      {props.children}
    </a>
  );
}

function handleClick(e: React.MouseEvent) {
  e.preventDefault();
  console.log('foobar');
}
