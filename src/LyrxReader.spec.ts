import { expect, describe, test, beforeAll } from 'vitest';
import { LyrxReader } from './LyrxReader'; 
import { CIMLayerDocument } from './types/CIMLayerDocument';
import { fail } from 'assert';

describe('LyrxReader with simple polygon renderer', () => {
  let lyrx: CIMLayerDocument;

  beforeAll(async () => {
    lyrx = await LyrxReader.readLyrx('./data/lyrx/feature-layer-polygon-simple-renderer.lyrx');
  });

  describe('readLyrx should read file and convert to type', () => {
    test('should define the lyrx object', () => {
      expect(lyrx).toBeDefined();
    });

    test('should have correct version', () => {
      expect(lyrx.version).toEqual('3.2.0');
    });

    test('should have non-null layerDefinitions', () => {
      expect(lyrx.layerDefinitions).not.toBeNull();
    });

    test('should have one layerDefinition', () => {
      expect(lyrx.layerDefinitions?.length ?? 0).toEqual(1);
    });

    test('should read the properties of the first polygon layer correctly', () => {
      const firstLayer = lyrx.layerDefinitions?.[0];
      if(firstLayer) {
        expect(firstLayer).toBeDefined();
        expect(firstLayer.name).toEqual('LOUDGLEE');
        // expect(firstLayer.description).toEqual('AGIS.aw_jagd');
      }
      else{
        fail("No layer found");
      } 
    });
  });
});