import React from 'react';

function requireAll(r) {
  r.keys().forEach(r);
}

const BookLoader = require.context('../../../../public/books/', true, /\.(epub|mobi)$/i);
requireAll(BookLoader);

export default function ELibrary() {
  return <h2>hello world</h2>;
}
