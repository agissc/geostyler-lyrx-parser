/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A list of anchor positions for an element on a page layout.
 */
export type Anchor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * Describes the different types of units.
 */
export type UnitType = 0 | 1 | 2 | 3;
/**
 * Describes the different types of geometry.
 */
export type GeometryType = 0 | 513 | 3077 | 3594 | 8710 | 25607 | 27656 | 32777;
/**
 * A list of orientation values.
 */
export type Orientation = 0 | 1;
/**
 * Specifies color model used for maps and layouts.
 *
 */
export type ColorModel = 0 | 1;
/**
 * Color vision deficiency types.
 */
export type ColorVisionDeficiencyType = 0 | 1 | 2 | 3;

/**
 * Represents a layout in a project.
 */
export interface CIMLayout {
  /**
   * Gets or sets the name.
   */
  name?: null | string;
  /**
   * Gets or sets the URI of the definition. Typically set by the system and used as an identifier.
   */
  uri?: null | string;
  /**
   * Gets or sets the source URI of the item. Set if sourced from an external item such as an item on a portal.
   */
  sourceURI?: null | string;
  /**
   * Gets or sets the time the source was last modified, as of the last sync. Used to detect when another sync is needed.
   */
  sourceModifiedTime?: null | TimeInstant;
  /**
   * Gets or sets the metadata URI.
   */
  metadataURI?: null | string;
  /**
   * Gets or sets a value indicating whether the CIM definition accesses metadata from its data source (the default behavior), or if it has its own metadata stored in the project.
   */
  useSourceMetadata?: boolean;
  /**
   * Gets or sets the source portal URI of the item. Set if sourced from an external item such as an item on a portal.
   */
  sourcePortalUrl?: null | string;
  /**
   * Gets or sets a collection of elements.
   */
  elements?: CIMElement[] | null;
  /**
   * Gets or sets the CIMPage for the layout.
   */
  page?: null | CIMPage;
  /**
   * Gets or sets the date exported property for a layout.
   */
  dateExported?: null | TimeInstant;
  /**
   * Gets or sets the date printed property for a layout.
   */
  datePrinted?: null | TimeInstant;
  /**
   * Gets or sets the map series for a layout.
   */
  mapSeries?: null | CIMMapSeries;
  /**
   * Gets or sets the color model for a layout.
   */
  colorModel?: ColorModel;
  /**
   * Gets or sets the name of the RGB color profile for a layout.
   */
  rgbColorProfile?: null | string;
  /**
   * Gets or sets the name of the CMYK color profile for a layout.
   */
  cmykColorProfile?: null | string;
  /**
   * Gets or sets a value indicating whether to simulate overprint for a layout.
   */
  simulateOverprint?: boolean;
  /**
   * Gets or sets the custom properties of the layout. Custom properties are limited to key / value pairs of strings and developers are fully responsible for stored content.
   */
  customProperties?: CIMStringMap[] | null;
  /**
   * Gets or sets the color vision deficiency mode that new views of this layout are opened with.
   */
  defaultColorVisionDeficiencyMode?: ColorVisionDeficiencyType;
}
/**
 * Represents an instant in time. The time has no duration.
 */
export interface TimeInstant {
  /**
   * Gets or sets the time zone definition of the time.
   */
  timeReference?: null | TimeReference;
  /**
   * Gets or sets the time.
   */
  time?: string;
}
/**
 * Represents the time zone definition for a given date and time.
 */
export interface TimeReference {
  /**
   * Gets or sets the windows id for the time zone.
   */
  timeZoneNameID?: null | string;
  /**
   * Gets or sets a value indicating if the time reference should honor daylight savings time.
   */
  respectsDaylightSavingTime?: boolean;
  /**
   * Gets or sets a value indicating if the time reference should respect dynamic rules for adjusting with daylight savings time for specific years.
   */
  respectsDynamicAdjustmentRules?: boolean;
}
/**
 * A CIM representation of an element.
 */
export interface CIMElement {
  /**
   * Gets or sets the anchor position of the element.
   */
  anchor?: Anchor;
  /**
   * Gets or sets a value indicating whether the element is locked. Each element in the contents pane has a lock icon. If the icon is shown as locked, you can not select that feature in the layout using the select tool.
   */
  locked?: boolean;
  /**
   * Gets or sets the name of the element.
   */
  name?: null | string;
  /**
   * Gets or sets a value indicating whether the element is visible.
   */
  visible?: boolean;
  /**
   * Gets or sets the rotation of the element.
   */
  rotation?: number;
  /**
   * Gets or sets the location of the anchor in page units.This is also the location the feature is rotated around.
   */
  rotationCenter?: null | MapPoint;
  /**
   * Gets or sets a value indicating whether the aspect ratio for an element is locked. If locked, the width and height values stretch proportionally.
   */
  lockedAspectRatio?: boolean;
  /**
   * Gets or sets the custom properties of the element.
   */
  customProperties?: CIMStringMap[] | null;
}
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
/**
 * Represents a string map of key value pairs.
 *
 */
export interface CIMStringMap {
  /**
   * Gets or sets the key.
   */
  key?: null | string;
  /**
   * Gets or sets the value.
   */
  value?: null | string;
}
/**
 * Represents the page information associated with a layout.
 */
export interface CIMPage {
  /**
   * Gets or sets the height of the layout in page units.
   */
  height?: number;
  /**
   * Gets or sets a value indicating whether elements should be stretched when the page size is changed.
   */
  stretchElements?: boolean;
  /**
   * Gets or sets the width of the layout in page units.
   */
  width?: number;
  /**
   * Gets or sets the printer preferences for the page.
   */
  printerPreferences?: null | CIMPrinterPreferences;
  /**
   * Gets or sets the page units for the layout.
   */
  units?: null | LinearUnit;
  /**
   * Gets or sets the guides on a layout.
   */
  guides?: CIMGuide[] | null;
  /**
   * Gets or sets a value indicating whether rulers should be displayed on the layout.
   */
  showRulers?: boolean;
  /**
   * Gets or sets a value indicating whether guides should be displayed on the layout.
   */
  showGuides?: boolean;
  /**
   * Gets or sets the smallest ruler division.
   */
  smallestRulerDivision?: number;
  /**
   * Gets or sets the margin for the page.
   */
  margin?: null | CIMMargin;
  /**
   * Gets or sets a value indicating whether the printer margin should be displayed on the layout.
   */
  showMargin?: boolean;
}
/**
 * Represents the printer preferences associated with a layout.
 */
export interface CIMPrinterPreferences {
  /**
   * Gets or sets the printer name.
   */
  printerName?: null | string;
  /**
   * Gets or sets the paper size name.
   */
  paperName?: null | string;
  /**
   * Gets or sets the paper source.
   */
  paperSource?: number;
}
/**
 * Represents a linear unit of measure used by a Geometry or SpatialReference, or in measurement conversion functions.
 */
export interface LinearUnit {
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
  /**
   * Gets the meters per unit.
   */
  metersPerUnit?: number;
}
/**
 * Represents a guide used to snap elements on a page layout.
 */
export interface CIMGuide {
  /**
   * Gets or sets the position of the guide.
   */
  position?: number;
  /**
   * Gets or sets the horizontal or vertical orientation of the guide.
   */
  orientation?: Orientation;
}
/**
 * Represents a margin to apply around the page.
 *
 */
export interface CIMMargin {
  /**
   * Gets or sets the left margin.
   */
  left?: number;
  /**
   * Gets or sets the right margin.
   */
  right?: number;
  /**
   * Gets or sets the top margin.
   */
  top?: number;
  /**
   * Gets or sets the bottom margin.
   */
  bottom?: number;
}
/**
 * The Map series object represents a means to create multi-page PDF or
 * based off of fields in the index layer.
 */
export interface CIMMapSeries {
  /**
   * Gets or sets a value indicating whether the map series is enabled on the layout.
   */
  enabled?: boolean;
  /**
   * Gets or sets the URI of the MapFrame to which MapSeries is linked.
   */
  mapFrameName?: null | string;
  /**
   * Gets or sets the starting page number.
   */
  startingPageNumber?: number;
  /**
   * Gets or sets the current page Id.
   */
  currentPageID?: number;
}
