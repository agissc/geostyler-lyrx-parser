/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Describes the different types of units.
 */
export type UnitType = 0 | 1 | 2 | 3;

/**
 * A common base class between all units, linear, area and angular units.
 */
export interface Unit {
  /**
   * Gets the well-known ID of the unit. If the unit is a custom unit, then the factory code will be 0.
   */
  factoryCode?: number;
  /**
   * Gets the well-known text of the unit.
   */
  wkt?: null | string;
  /**
   * Gets the name of the unit.
   */
  name?: null | string;
  /**
   * Gets the conversion factor of the unit.
   */
  conversionFactor?: number;
  /**
   * Gets the type of unit.
   */
  unitType?: UnitType;
}
