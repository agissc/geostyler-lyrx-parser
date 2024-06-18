import { CIMLayerDocument } from "./types/CIMLayerDocument";
import fs from 'fs';

export class LyrxReader  {  
    static readLyrx(lyrxPath: string): CIMLayerDocument {
      const lyxText = fs.readFileSync(lyrxPath, 'utf8');
      return JSON.parse(lyxText, ) as CIMLayerDocument;
 } 
}
  