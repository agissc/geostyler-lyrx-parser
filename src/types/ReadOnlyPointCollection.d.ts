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
 * Describes the different types of geometry.
 */
export type GeometryType = 0 | 513 | 3077 | 3594 | 8710 | 25607 | 27656 | 32777;
export type ReadOnlyPointCollection = MapPoint[];

/**
 * A MapPoint represents a single location in space. The location consists of X and Y values and optionally a Z and/or M value.
 * To create a MapPoint use the MapPointBuilderEx object.
 */
export interface MapPoint {
  /**
   * Gets a value indicating if the geometry has Z.
   */
  hasZ?: boolean;
  /**
   * Gets a value indicating if the geometry has M.
   */
  hasM?: boolean;
  /**
   * Gets a value indicating if the geometry has ID.
   */
  hasID?: boolean;
  /**
   * Gets the spatial reference of this instance.
   */
  spatialReference?: null | SpatialReference;
  /**
   * Gets the dimension of the geometry.
   */
  dimension?: number;
  /**
   * Gets the GeometryType of this instance.  Always returns Point.
   */
  geometryType?: GeometryType;
  /**
   * Gets the point count of the geometry. This is always 1.
   */
  pointCount?: number;
  /**
   * Gets the X-coordinate.
   */
  x?: number;
  /**
   * Gets the Y-coordinate.
   */
  y?: number;
  /**
   * Gets the Z-coordinate.
   */
  z?: number;
  /**
   * Gets the measure value.
   */
  m?: number;
  /**
   * Gets the ID value.
   */
  id?: number;
  /**
   * Gets a Coordinate2D structure with the X and Y values.
   */
  coordinate2D?: Coordinate2D;
  /**
   * Gets a Coordinate3D structure with the X, Y, and Z values.
   */
  coordinate3D?: Coordinate3D;
  /**
   * Gets the minimum enclosing envelope of the geometry.
   */
  extent?: null | Envelope;
  /**
   * Gets a value indicating whether or not the geometry is empty.
   */
  isEmpty?: boolean;
}
/**
 * Class representing a spatial reference.
 */
export interface SpatialReference {
  /**
   * Gets the well-known ID for this instance.
   */
  wkid?: number;
  /**
   * Gets the latest well-known ID for this instance.
   */
  latestWkid?: number;
  /**
   * Gets the underlying geographic coordinate system for this instance.
   * If this instance is a geographic coordinate system,
   * a pointer to this instance is returned.
   */
  gcs?: null | SpatialReference;
  /**
   * Gets the well-known text for this instance.
   */
  wkt?: null | string;
  /**
   * Gets the name of the spatial reference.
   */
  name?: null | string;
  /**
   * Gets the geographic coordinate system well-known ID.
   */
  gcsWkid?: number;
  /**
   * Gets the geographic coordinate system well-known text.
   */
  gcsWkt?: null | string;
  /**
   * Gets the vertical coordinate system well-known ID.
   */
  vcsWkid?: number;
  /**
   * Gets the vertical coordinate system well-known text.
   */
  vcsWkt?: null | string;
  /**
   * Determines if a vertical coordinate system has been defined.
   */
  hasVcs?: boolean;
  /**
   * Gets the XY Tolerance.
   */
  xyTolerance?: number;
  /**
   * Gets the XY Resolution.
   */
  xyResolution?: number;
  /**
   * Gets the Z Tolerance.
   */
  zTolerance?: number;
  /**
   * Gets the M Tolerance.
   */
  mTolerance?: number;
  /**
   * Gets the XY Scale.
   */
  xyScale?: number;
  /**
   * Gets the Z Scale.
   */
  zScale?: number;
  /**
   * Gets the M Scale.
   */
  mScale?: number;
  /**
   * Gets the false X.
   */
  falseX?: number;
  /**
   * Gets the false Y.
   */
  falseY?: number;
  /**
   * Gets the false Z.
   */
  falseZ?: number;
  /**
   * Gets the false M.
   */
  falseM?: number;
  /**
   * Gets the left longitude value of the geographic coordinate system.
   */
  leftLongitude?: number;
  /**
   * Gets the right longitude value of the geographic coordinate system.
   */
  rightLongitude?: number;
  /**
   * Gets the HighPrecision flag of this instance.
   */
  isHighPrecision?: boolean;
  /**
   * Gets the units that the spatial reference coordinates are in.
   */
  unit?: null | Unit;
  /**
   * Gets the units that the spatial reference z-coordinates are in.
   */
  zUnit?: null | Unit;
  /**
   * Gets the central meridian of the projected coordinate system.
   */
  centralMeridian?: number;
  /**
   * Gets if this is a geographic coordinate system.
   */
  isGeographic?: boolean;
  /**
   * Gets if this is a projected coordinate system.
   */
  isProjected?: boolean;
  /**
   * Gets if this is an image coordinate system.
   */
  isImage?: boolean;
  /**
   * Gets if this is the unknown coordinate system.
   */
  isUnknown?: boolean;
  /**
   * Gets if this is instance is pannable.
   */
  isPannable?: boolean;
  /**
   * Gets the square domain extent of the spatial reference.
   */
  domain?: null | Envelope;
  /**
   * Gets the horizontal datum of this spatial reference.
   */
  datum?: null | Datum;
}
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
/**
 * An envelope is an axis-aligned box described by the coordinates
 * of the lower left corner and the coordinates of the upper right corner.   To create an envelope use the
 * EnvelopeBuilderEx object.
 */
export interface Envelope {
  /**
   * Gets a value indicating if the geometry has Z.
   */
  hasZ?: boolean;
  /**
   * Gets a value indicating if the geometry has M.
   */
  hasM?: boolean;
  /**
   * Gets a value indicating if the geometry has ID.
   */
  hasID?: boolean;
  /**
   * Gets the spatial reference of this instance.
   */
  spatialReference?: null | SpatialReference;
  /**
   * Gets the dimension of the geometry.
   */
  dimension?: number;
  /**
   * Gets the GeometryType of this instance.  Always returns Envelope.
   */
  geometryType?: GeometryType;
  /**
   * Gets the point count of this instance. Always returns 5.
   */
  pointCount?: number;
  /**
   * Gets the X minimum of this instance.
   */
  xMin?: number;
  /**
   * Gets the Y minimum of this instance.
   */
  yMin?: number;
  /**
   * Gets the X maximum of this instance.
   */
  xMax?: number;
  /**
   * Gets the Y maximum of this instance.
   */
  yMax?: number;
  /**
   * Gets the Z minimum of this instance.
   */
  zMin?: number;
  /**
   * Gets the Z maximum of this instance.
   */
  zMax?: number;
  /**
   * Gets the M minimum of this instance.
   */
  mMin?: number;
  /**
   * Gets the M maximum of this instance.
   */
  mMax?: number;
  /**
   * Gets the ID minimum of this instance.
   */
  idMin?: number;
  /**
   * Gets the ID maximum of this instance.
   */
  idMax?: number;
  /**
   * Gets the center of this instance as a Coordinate2D.
   */
  centerCoordinate?: Coordinate2D;
  /**
   * Gets the center of this instance as a MapPoint.
   */
  center?: null | MapPoint;
  /**
   * Gets the height of this instance.
   */
  height?: number;
  /**
   * Gets the width of this instance.
   */
  width?: number;
  /**
   * Gets the depth of this instance.
   */
  depth?: number;
  /**
   * Gets the perimeter length of this instance.
   */
  length?: number;
  /**
   * Gets the 3D length of the perimeter of this instance.
   */
  length3D?: number;
  /**
   * Gets the area of this instance.
   */
  area?: number;
  /**
   * Gets the minimum enclosing envelope of this instance. Returns null if this geometry has IsEmpty = true.
   */
  extent?: null | Envelope;
  /**
   * Gets a value indicating whether or not the geometry is empty.
   */
  isEmpty?: boolean;
}
/**
 * A lightweight structure that holds X and Y values.
 */
export interface Coordinate2D {
  /**
   * Gets or sets the X-component.
   */
  x?: number;
  /**
   * Gets or sets the Y-component.
   */
  y?: number;
  /**
   * Gets or sets the length of the Coordinate2D as a vector.
   */
  magnitude?: number;
  /**
   * Indicates if the Coordinate2D is empty.
   */
  isEmpty?: boolean;
}
/**
 * Describes the horizontal datum of a geographic coordinate system. It is returned from Datum.
 */
export interface Datum {
  /**
   * Gets the well-known ID of this horizontal datum.
   */
  wkid?: number;
  /**
   * Gets the well-known ID of the spheroid of this horizontal datum.
   */
  spheroidWkid?: number;
  /**
   * Gets the length of the semi-major axis of the spheroid of this horizontal datum.
   */
  spheroidSemiMajorAxis?: number;
  /**
   * Gets the length of the semi-minor axis of the spheroid of this horizontal datum.
   */
  spheroidSemiMinorAxis?: number;
  /**
   * Gets the flattening ratio of the spheroid of this horizontal datum.
   */
  spheroidFlattening?: number;
  /**
   * Gets the name of this horizontal datum.
   */
  name?: null | string;
  /**
   * Gets the name of the spheroid of this horizontal datum.
   */
  spheroidName?: null | string;
}
/**
 * A structure containing methods to manipulate 3D vertices and 3D vectors.
 */
export interface Coordinate3D {
  /**
   * Gets or sets the X-component.
   */
  x?: number;
  /**
   * Gets or sets the Y-component.
   */
  y?: number;
  /**
   * Gets or sets the Z-component.
   */
  z?: number;
  /**
   * Gets or sets the length of the Coordinate3D as a vector.
   */
  magnitude?: number;
  /**
   * Gets the inclination of the Coordinate3D. The inclination is measured in radians.
   */
  inclination?: number;
  /**
   * Gets the azimuth of the Coordinate3D. The azimuth is measured in radians.
   */
  azimuth?: number;
  /**
   * Indicates if the Coordinate3D is empty.
   */
  isEmpty?: boolean;
}
