import { expect, test } from 'vitest';
import fs from 'fs';
import { LyrxParser } from './LyrxParser';
import { fail } from 'assert';

test('adds 1 + 1 to equal 2', () => {
  expect(1 + 1).toBe(2);
});

test('Should', async () => {
  var lyrxParser = new LyrxParser();
  const lyxText = fs.readFileSync('./data/lyrx/test.lyrx', 'utf8');
  const lyrx = JSON.parse(lyxText, ); 
  const { output: geoStylerStyle, warnings } = await lyrxParser.readStyle(lyrx);
  expect(geoStylerStyle).toBeDefined(); 
  if (warnings)
    expect(warnings[0]).toEqual("3.2.0");
  else 
    fail();
})