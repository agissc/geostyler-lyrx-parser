/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CIMVectorTileLayer = CIMBaseLayer & {
  /**
   * Gets or sets the data connection to the VectorTile resource.
   */
  dataConnection?: null | CIMVectorTileDataConnection;
  /**
   * Gets or sets the current style the vector tile layer features should be rendered with.
   */
  currentStyle?: null | string;
  /**
   * Gets or sets the URI for a feature layer (feature service-based or portal item-based) that provides pop-up support for the vector tile layer.
   */
  associatedFeatureLayerURI?: null | string;
};
export type CIMBaseLayer = CIMDefinition & {
  /**
   * Gets or sets the attribution text that appears on a map that draws this layer.
   */
  attribution?: null | string;
  /**
   * Gets or sets the description.
   */
  description?: null | string;
  /**
   * Gets or sets the layer elevation.
   */
  layerElevation?: null | CIMLayerElevationSurface;
  /**
   * Gets or sets a value indicating whether this layer is expanded in the contents pane.
   */
  expanded?: boolean;
  /**
   * Gets or sets the 3D layer properties.
   */
  layer3DProperties?: null | CIM3DLayerProperties;
  /**
   * Gets or sets the URIs of the layers used as masks.
   */
  layerMasks?: string[] | null;
  /**
   * Gets or sets the map layer type.
   */
  layerType?: MapLayerType;
  /**
   * Gets or sets the maximum scale for layer draw (set as the denominator of the scale's representative fraction).
   */
  maxScale?: number;
  /**
   * Gets or sets the minimum scale for layer draw (set as the denominator of the scale's representative fraction).
   */
  minScale?: number;
  /**
   * Gets or sets a value indicating whether or not to show legends.
   */
  showLegends?: boolean;
  /**
   * Gets or sets the transparency of the layer.
   */
  transparency?: number;
  /**
   * Gets or sets a value indicating whether or not this layer is visible.
   */
  visibility?: boolean;
  /**
   * Gets or sets the display cache type.
   */
  displayCacheType?: DisplayCacheType;
  /**
   * Gets or sets the maximum display cache age.
   */
  maxDisplayCacheAge?: number;
  /**
   * Gets or sets the layer template.
   */
  layerTemplate?: null | CIMLayerTemplate;
  /**
   * Gets or sets the pop-up info.
   */
  popupInfo?: null | CIMPopupInfo;
  /**
   * Gets or sets a value indicating whether or not to show pop-ups.
   */
  showPopups?: boolean;
  /**
   * Gets or sets identifier that will be used to identify the layer in server.
   */
  serviceLayerID?: number;
  /**
   * Gets or sets identifier the layer's charts.
   */
  charts?: CIMChart[] | null;
  /**
   * Gets or sets a value indicating whether or not this layer should be included in the search. This property is honored only by layers that support search.
   */
  searchable?: boolean;
  /**
   * Gets or sets the amount of time to wait between refreshing the layer.
   */
  refreshRate?: number;
  /**
   * Gets or sets the units for the amount of time to wait between refreshing the layer.
   */
  refreshRateUnit?: EsriTimeUnits;
  /**
   * Gets or sets a value indicating whether or not the display value is shown when hovering over a layer in the view.
   */
  showMapTips?: boolean;
  /**
   * Gets or sets the custom properties of the layer. Custom properties are limited to key / value pairs of strings and developers are fully responsible for stored content.
   */
  customProperties?: CIMStringMap[] | null;
  /**
   * Gets or sets an identifier that will be used to identify the layer in a web map. This value is present if the layer originated in a web map and facilitates matching the layer back to its origin when updating the web map.
   */
  webMapLayerID?: null | string;
  /**
   * Gets or sets the blending mode for the layer.
   */
  blendingMode?: BlendingMode;
  /**
   * Gets or sets a value indicating whether layer can be draped on integrated mesh.
   */
  allowDrapingOnIntegratedMesh?: boolean;
};
export type CIMDefinition = CIMObject & {
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
};
export type TimeInstant = TimeValue & {
  /**
   * Gets or sets the time.
   */
  time?: string;
};
export type TimeValue = CIMObject & {
  /**
   * Gets or sets the time zone definition of the time.
   */
  timeReference?: null | TimeReference;
};
export type TimeReference = CIMObject & {
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
};
export type CIMLayerElevationSurface = CIMObject & {
  /**
   * Gets or sets Z offset.
   */
  offsetZ?: number;
  /**
   * Gets or sets the elevation surface layer URI.
   */
  elevationSurfaceLayerURI?: null | string;
};
export type CIM3DLayerProperties = CIMObject & {
  /**
   * Gets or sets a value indicating whether shadows are enabled. If true, this layer's features contribute to shadows.
   */
  castShadows?: boolean;
  /**
   * Gets or sets a value indicating whether this layer is lit.
   */
  isLayerLit?: boolean;
  /**
   * Gets or sets the layer's face culling setting.
   */
  layerFaceCulling?: FaceCulling3D;
  /**
   * Gets or sets the maximum distance at which objects in view are visible. Objects beyond this point don't get rendered.
   */
  maxDistance?: number;
  /**
   * Gets or sets the maximum radius from the camera at which objects outside the view are loaded. Values are in Meters.
   */
  maxPreloadDistance?: number;
  /**
   * Gets or sets the minimum distance at which objects in view are visible. Objects closer than this don't get rendered.
   */
  minDistance?: number;
  /**
   * Gets or sets the minimum radius from the camera at which objects at which objects outside the view are loaded. Values are in Meters.
   */
  minPreloadDistance?: number;
  /**
   * Gets or sets the distance (in visible range) at which high resolution textures change to low resolution textures for objects outside the view. Range is 0 to 1.
   */
  preloadTextureCutoffHigh?: number;
  /**
   * Gets or sets the distance (in visible range) at which low resolution textures change to solid colors for objects outside the view. Range is 0 to 1.
   */
  preloadTextureCutoffLow?: number;
  /**
   * Gets or sets the distance (in visible range) at which the high resolution textures change to low resolution textures. Range is 0 to 1.
   */
  textureCutoffHigh?: number;
  /**
   * Gets or sets the distance (in visible range) at which the high resolution textures change to solid colors. Range is 0 to 1.
   */
  textureCutoffLow?: number;
  /**
   * Gets or sets the downscaling factor. All textures for this layer are downscaled by this additional factor on loading.
   */
  textureDownscalingFactor?: number;
  /**
   * Gets or sets a value indicating whether uncompressed textures are compressed using DXT5 at load time.
   */
  useCompressedTextures?: boolean;
  /**
   * Gets or sets the layer's vertical exaggeration.
   */
  verticalExaggeration?: number;
  /**
   * Gets or sets the layer's exaggeration mode.
   */
  exaggerationMode?: ExaggerationMode;
  /**
   * Gets or sets the layer's vertical unit.
   */
  verticalUnit?: null | Unit;
  /**
   * Gets or sets the depth priority of a 3D layer.
   */
  depthPriority?: number;
  /**
   * Gets or sets the layer's lighting setting.
   */
  lighting?: Lighting3D;
  /**
   * Gets or sets a value indicating whether true alpha is quantized to fully opaque or transparent when false, actual values are used in marker drawing.
   */
  optimizeMarkerTransparency?: boolean;
  /**
   * Gets or sets a value indicating whether to use depth writing for transparency. This should be set to true if anomalies are seen in drawing order of transparent features in the same feature class.
   */
  useDepthWritingForTransparency?: boolean;
};
/**
 * The types of face culling.
 */
export type FaceCulling3D = 0 | 1 | 2 | 3;
/**
 * Represents the exaggeration modes.
 *
 */
export type ExaggerationMode = 0 | 1;
/**
 * Describes the different types of units.
 */
export type UnitType = 0 | 1 | 2 | 3;
/**
 * The types of lighting.
 *
 */
export type Lighting3D = 0 | 1 | 2 | 3 | 4 | 5;
/**
 * The types of map layers by use in the map or scene.
 */
export type MapLayerType = 0 | 1 | 2 | 3;
/**
 * Display cache types.
 *
 */
export type DisplayCacheType = 0 | 1 | 2 | 3;
export type CIMLayerTemplate = CIMObject & {
  /**
   * Gets or sets the layer template ID.
   */
  layerTemplateId?: null | string;
  /**
   * Gets or sets the layer template parameters.
   */
  parameters?: null | {
    [k: string]: unknown;
  };
};
export type CIMPopupInfo = CIMObject & {
  /**
   * Gets or sets the title.
   */
  title?: null | string;
  /**
   * Gets or sets Arcade expressions that are referenced as fields in one or more elements in MediaInfos.
   */
  expressionInfos?: CIMExpressionInfo[] | null;
  /**
   * Gets or sets the media infos.
   */
  mediaInfos?: CIMMediaInfo[] | null;
  /**
   * Gets or sets the field name and the sort order by which the related records will be ordered.
   * The items are defined by the related field name (Format: RelationshipName\\FieldName) as the Keys and the sort order (Enum: Asc, Desc) as the Values.
   */
  relatedRecordSortOrder?: CIMStringMap[] | null;
  /**
   * Gets or sets the grid layout for the media infos.
   */
  gridLayout?: null | CIMPopupLayout;
  /**
   * Gets or sets the pop-up field descriptions.
   */
  fieldDescriptions?: CIMPopupFieldDescription[] | null;
};
export type CIMExpressionInfo = CIMObject & {
  /**
   * Gets or sets the human readable text that describes the expression.
   */
  title?: null | string;
  /**
   * Gets or sets the Arcade expression used to evaluate and return the value that a property expects.
   */
  expression?: null | string;
  /**
   * Gets or sets the Name of the expression.
   */
  name?: null | string;
  /**
   * Gets or sets the ReturnType of the expression.
   */
  returnType?: ExpressionReturnType;
};
/**
 * Visual variable info types.
 *
 */
export type ExpressionReturnType = 0 | 1 | 2;
export type CIMMediaInfo = CIMObject & {
  /**
   * Gets or sets the row.
   */
  row?: number;
  /**
   * Gets or sets the column.
   */
  column?: number;
  /**
   * Gets or sets the amount of time in RefreshRateUnit to wait between refreshing the media info.
   */
  refreshRate?: number;
  /**
   * Gets or sets the units for the amount of time to wait between refreshing the media.
   */
  refreshRateUnit?: EsriTimeUnits;
  /**
   * Gets or sets the row span.
   */
  rowSpan?: number;
  /**
   * Gets or sets the column span.
   */
  columnSpan?: number;
};
/**
 * Time units.
 */
export type EsriTimeUnits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type CIMStringMap = CIMObject & {
  /**
   * Gets or sets the key.
   */
  key?: null | string;
  /**
   * Gets or sets the value.
   */
  value?: null | string;
};
export type CIMPopupLayout = CIMObject & {
  /**
   * Gets or sets the array of column width values in percentage of the table width (0-100).
   */
  columnWidths?: number[] | null;
  /**
   * Gets or sets the border width in points.
   */
  borderWidth?: number;
  /**
   * Gets or sets the border color.
   */
  borderColor?: null | CIMColor;
};
export type CIMColor = CIMObject & {
  /**
   * Gets and sets alpha.
   */
  alpha?: number;
  /**
   * Gets or sets the color spaced used defined by an ICC color profile.
   */
  colorSpace?: null | CIMColorSpace;
  /**
   * Gets or sets the values for the color and alpha channels as defined by the color model. Alpha is the last value in the array for all colors.
   */
  values?: number[] | null;
};
export type CIMColorSpace = CIMObject;
export type CIMPopupFieldDescription = CIMObject & {
  /**
   * Gets or sets the field alias.
   */
  alias?: null | string;
  /**
   * Gets or sets the field name.
   */
  fieldName?: null | string;
  /**
   * Gets or sets the number format.
   */
  numberFormat?: null | CIMNumberFormat;
};
export type CIMNumberFormat = CIMObject;
export type CIMChart = CIMObject & {
  /**
   * Gets or sets the name of the chart.
   */
  name?: null | string;
  /**
   * Gets or sets the series properties of the chart.
   */
  series?: CIMChartSeries[] | null;
  /**
   * Gets or sets the general properties of the chart.
   */
  generalProperties?: null | CIMChartGeneralProperties;
  /**
   * Gets or sets the legend properties of the chart.
   */
  legend?: null | CIMChartLegend;
  /**
   * Gets or sets the properties of chart axis.
   */
  axes?: CIMChartAxis[] | null;
  /**
   * Gets or sets a setting which indicates whether chart handles selection in the input layer by creating series only from the selected data or
   * highlights selected values on the chart made from entire dataset.
   */
  mapSelectionHandling?: ChartMapSelectionHandling;
  /**
   * Gets or sets the client metadata about the chart.
   */
  metaData?: null | string;
  /**
   * Gets or sets the multi series chart properties for supported chart types.
   */
  multiSeriesChartProperties?: null | CIMMultiSeriesChartProperties;
};
export type CIMChartSeries = CIMObject & {
  /**
   * Gets or sets the name of the series shown in the legend.
   */
  name?: null | string;
  /**
   * Gets or sets the default and unique name of the series.
   */
  uniqueName?: null | string;
  /**
   * Gets or sets the data field names in the series. Optional depending on series type.
   */
  fields?: string[] | null;
  /**
   * Gets or sets the sort field names in the series.
   */
  orderFields?: string[] | null;
  /**
   * Gets or sets the group field names in the series.
   */
  groupFields?: string[] | null;
  /**
   * Gets or sets the format string for series value labels.
   */
  whereClause?: null | string;
  /**
   * Gets or sets a value indicating whether the series shows data labels.
   */
  showLabels?: boolean;
  /**
   * Gets or sets the index of horizontal axis.
   */
  horizontalAxis?: number;
  /**
   * Gets or sets the index of vertical axis.
   */
  verticalAxis?: number;
  /**
   * Gets or sets the type of color for the series.
   */
  colorType?: ChartColorType;
  /**
   * Gets or sets the aggregate field values if series data has a group field.
   * Allowed values are count, sum, median, mean, and empty string.
   */
  fieldAggregation?: string[] | null;
  /**
   * Gets or sets the array of sort order types for fields in OrderFields property
   * Allowed values 0(Ascending), 1(Descending).
   */
  orderFieldsSortTypes?: number[] | null;
  /**
   * Gets or sets a value indicating whether the series is visible or not.
   */
  visible?: boolean;
  /**
   * Gets or sets the text style for the data label.
   */
  dataLabelText?: null | CIMChartTextProperties;
  /**
   * Gets or sets a value indicating whether this series is a multi series.
   */
  multiSeries?: boolean;
  /**
   * Gets or sets the locations for which data is to be plotted.
   */
  locations?: CIMChartLocationDefinition[] | null;
};
/**
 * Provides a type of coloring that chart series uses.
 */
export type ChartColorType = 0 | 1 | 2;
export type CIMChartTextProperties = CIMObject & {
  /**
   * Gets or sets the fill color for the font.
   */
  fontFillColor?: null | CIMColor;
  /**
   * Gets or sets the outline color for the font.
   */
  fontOutlineColor?: null | CIMColor;
  /**
   * Gets or sets the font family name.
   */
  fontFamilyName?: null | string;
  /**
   * Gets or sets a value indicating whether the font style if it is italic or not.
   */
  fontItalic?: boolean;
  /**
   * Gets or sets the font size in points.
   */
  fontSize?: number;
  /**
   * Gets or sets the font weight.
   */
  fontWeight?: ChartFontWeight;
  /**
   * Gets or sets the text case.
   */
  textCase?: ChartTextCase;
  /**
   * Gets or sets a value indicating whether the text is drawn with an underline.
   */
  textUnderline?: boolean;
  /**
   * Gets or sets a value indicating whether the text is drawn with a strikethrough.
   */
  textStrikethrough?: boolean;
  /**
   * Gets or sets a value indicating whether the text is drawn with an overline.
   */
  textOverline?: boolean;
};
/**
 * Chart font weight types.
 */
export type ChartFontWeight = 0 | 1 | 2;
/**
 * Options for choosing text cases for charts.
 */
export type ChartTextCase = 0 | 1 | 2 | 3 | 4;
export type CIMChartLocationDefinition = CIMObject & {
  /**
   * Gets or sets the geometry.
   */
  geometry?: null | Geometry;
  /**
   * Gets or sets the symbol.
   */
  symbol?: null | CIMSymbolReference;
  /**
   * Gets or sets the label.
   */
  label?: null | string;
  /**
   * Gets or sets a value indicating whether this location is enabled or not.
   */
  enabled?: boolean;
};
export type Envelope = Geometry & {
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
};
/**
 * Describes the different types of geometry.
 */
export type GeometryType = 0 | 513 | 3077 | 3594 | 8710 | 25607 | 27656 | 32777;
export type MapPoint = Geometry & {
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
};
export type CIMSymbolReference = CIMObject & {
  /**
   * Gets or sets the primitive overrides. Typically set by renderers at draw time.
   */
  primitiveOverrides?: CIMPrimitiveOverride[] | null;
  /**
   * Gets or sets the style path. Reserved for future use.
   */
  stylePath?: null | string;
  /**
   * Gets or sets the symbol.
   */
  symbol?: null | CIMSymbol;
  /**
   * Gets or sets the symbol name.
   */
  symbolName?: null | string;
  /**
   * Gets or sets the minimum scale range the symbol reference should be displayed at.
   */
  minScale?: number;
  /**
   * Gets or sets the maximum scale range the symbol reference should be displayed at.
   */
  maxScale?: number;
  /**
   * Gets or sets an array of scale dependent sizes.
   */
  scaleDependentSizeVariation?: CIMScaleDependentSizeVariation[] | null;
  /**
   * Gets or sets the minimum distance at which symbols are visible. Objects closer than this don't get rendered.
   */
  minDistance?: number;
  /**
   * Gets or sets the maximum distance at which symbols are visible. Objects beyond this point don't get rendered.
   */
  maxDistance?: number;
};
export type CIMPrimitiveOverride = CIMObject & {
  /**
   * Gets or sets the primitive name this override applies to.
   */
  primitiveName?: null | string;
  /**
   * Gets or sets the property name in the primitive this override applies to.
   */
  propertyName?: null | string;
  /**
   * Gets or sets the expression.
   */
  expression?: null | string;
  /**
   * Gets or sets ExpressionInfo that contains the Arcade expression that returns value as a number or a string depending on the PropertyName.
   */
  valueExpressionInfo?: null | CIMExpressionInfo;
};
export type CIMSymbol = CIMObject;
export type CIMScaleDependentSizeVariation = CIMObject & {
  /**
   * Gets or sets the scale the size is associated with.
   */
  scale?: number;
  /**
   * Gets or sets the size for the associated scale.
   */
  size?: number;
};
export type CIMChartGeneralProperties = CIMObject & {
  /**
   * Gets or sets the title of the chart.
   */
  title?: null | string;
  /**
   * Gets or sets a value indicating whether the chart title is visible.
   */
  showTitle?: boolean;
  /**
   * Gets or sets a value indicating whether the chart title is auto generated.
   */
  useAutomaticTitle?: boolean;
  /**
   * Gets or sets the subtitle of the chart.
   */
  subTitle?: null | string;
  /**
   * Gets or sets a value indicating whether the chart subtitle is visible.
   */
  showSubTitle?: boolean;
  /**
   * Gets or sets the footer of the chart.
   */
  footer?: null | string;
  /**
   * Gets or sets a value indicating whether the chart footer is visible.
   */
  showFooter?: boolean;
  /**
   * Gets or sets the theme of the chart.
   */
  theme?: null | string;
  /**
   * Gets or sets the title symbol properties.
   */
  titleText?: null | CIMChartTextProperties;
  /**
   * Gets or sets the subtitle symbol properties.
   */
  subTitleText?: null | CIMChartTextProperties;
  /**
   * Gets or sets the footer symbol properties.
   */
  footerText?: null | CIMChartTextProperties;
  /**
   * Gets or sets the background fill symbol properties for the chart.
   */
  backgroundSymbolProperties?: null | CIMChartFillSymbolProperties;
  /**
   * Gets or sets the line symbol properties for grid lines.
   */
  gridLineSymbolProperties?: null | CIMChartLineSymbolProperties;
};
export type CIMChartFillSymbolProperties = CIMObject & {
  /**
   * Gets or sets the color of the fill.
   */
  color?: null | CIMColor;
  /**
   * Gets or sets the transparency level of histogram bars.
   */
  opacity?: number;
  /**
   * Gets or sets the properties of the fill symbol border.
   */
  lineSymbolProperties?: null | CIMChartLineSymbolProperties;
};
export type CIMChartLineSymbolProperties = CIMObject & {
  /**
   * Gets or sets a value indicating whether the line is visible.
   */
  visible?: boolean;
  /**
   * Gets or sets the width of the line.
   */
  width?: number;
  /**
   * Gets or sets the style of the line.
   */
  style?: ChartLineDashStyle;
  /**
   * Gets or sets the color of the line.
   */
  color?: null | CIMColor;
};
/**
 * Chart line dash style.
 */
export type ChartLineDashStyle = 0 | 1 | 2 | 3 | 4 | 5;
export type CIMChartLegend = CIMObject & {
  /**
   * Gets or sets a value indicating whether the chart legend is visible.
   */
  visible?: boolean;
  /**
   * Gets or sets the title of the legend.
   */
  title?: null | string;
  /**
   * Gets or sets a value indicating whether the legend title is visible.
   */
  showTitle?: boolean;
  /**
   * Gets or sets the options in arranging the chart legend.
   */
  alignment?: ChartLegendAlignment;
  /**
   * Gets or sets the format string for series value labels.
   */
  valueFormat?: null | string;
  /**
   * Gets or sets the text symbol properties.
   */
  legendText?: null | CIMChartTextProperties;
  /**
   * Gets or sets the text symbol properties for legend title.
   */
  legendTitle?: null | CIMChartTextProperties;
};
/**
 * Chart legend alignment options.
 */
export type ChartLegendAlignment = 0 | 1 | 2 | 3;
export type CIMChartAxis = CIMObject & {
  /**
   * Gets or sets a value indicating whether the chart axis is visible.
   */
  visible?: boolean;
  /**
   * Gets or sets a value indicating whether the chart axis has logarithmic scale.
   */
  isLogarithmic?: boolean;
  /**
   * Gets or sets the title of an axis.
   */
  title?: null | string;
  /**
   * Gets or sets a value indicating whether the axis title is visible.
   */
  showTitle?: boolean;
  /**
   * Gets or sets a value indicating whether the axis title is auto generated.
   */
  useAutomaticTitle?: boolean;
  /**
   * Gets or sets the format string for axis value labels.
   */
  valueFormat?: null | string;
  /**
   * Gets or sets the number format of the axis labels. ValueNumberFormat takes precedence over ValueFormat when both are specified.
   */
  valueNumberFormat?: null | CIMNumberFormat;
  /**
   * Gets or sets the format string for axis date/time labels.
   */
  dateTimeFormat?: null | string;
  /**
   * Gets or sets a value indicating whether the chart axis calculates its minimum.
   */
  calculateAutomaticMinimum?: boolean;
  /**
   * Gets or sets a value indicating whether the chart axis calculates its maximum.
   */
  calculateAutomaticMaximum?: boolean;
  minimum?: unknown;
  maximum?: unknown;
  /**
   * Gets or sets the title symbol properties.
   */
  titleText?: null | CIMChartTextProperties;
  /**
   * Gets or sets the label symbol properties.
   */
  labelText?: null | CIMChartTextProperties;
  /**
   * Gets or sets the line symbol properties for axis.
   */
  axisLineSymbolProperties?: null | CIMChartLineSymbolProperties;
  /**
   * Gets or sets the array of guides.
   */
  guides?: CIMChartGuide[] | null;
  /**
   * Gets or sets the character limit for axis labels.
   */
  labelCharacterLimit?: number;
  /**
   * Gets or sets the relative start position for zoom/pan navigation. The value range is normalized between 0 and 1.
   */
  zoomStartPosition?: number;
  /**
   * Gets or sets the relative end position for zoom/pan navigation. The value range is normalized between 0 and 1.
   */
  zoomEndPosition?: number;
};
export type CIMChartGuide = CIMObject & {
  /**
   * Gets or sets the name / title for the guide.
   */
  name?: null | string;
  /**
   * Gets or sets the label for the guide.
   */
  label?: null | string;
  /**
   * Gets or sets the text format for the guide label.
   */
  labelText?: null | CIMChartTextProperties;
  /**
   * Gets or sets the relative position of the label to the guide.
   */
  labelPosition?: ChartPosition;
  /**
   * Gets or sets the numeric coordinate of the from value for the guide. This value will be used when guide value type is set to numeric.
   */
  valueFrom?: number;
  /**
   * Gets or sets the numeric coordinate of the to value for the guide. This value will be used when guide value type is set to numeric.
   */
  valueTo?: number;
  /**
   * Gets or sets the temporal coordinate of the from value for the guide. This value will be used when guide value type is set to temporal.
   */
  timeFrom?: null | TimeInstant;
  /**
   * Gets or sets the temporal coordinate of the to value for the guide. This value will be used when guide value type is set to temporal.
   */
  timeTo?: null | TimeInstant;
  /**
   * Gets or sets a value indicating whether the guide is visible.
   */
  visible?: boolean;
  /**
   * Gets or sets the type of the guide.
   */
  guideType?: ChartGuideType;
  /**
   * Gets or sets the type of the coordinate value used in the guide.
   */
  guideValueType?: ChartValueType;
  /**
   * Gets or sets the symbol properties for the guide.
   */
  fillSymbolProperties?: null | CIMChartFillSymbolProperties;
};
/**
 * Specifies the position of the content for a target.
 */
export type ChartPosition = 0 | 1 | 2 | 3 | 4;
/**
 * Specifies the type of guide.
 */
export type ChartGuideType = 0 | 1;
/**
 * Specifies the type of value.
 */
export type ChartValueType = 0 | 1;
/**
 * Provides a choice of how map selection is processed in the chart.
 */
export type ChartMapSelectionHandling = 0 | 1 | 2;
export type CIMMultiSeriesChartProperties = CIMObject & {
  /**
   * Gets or sets a value indicating whether multi series chart properties are enabled.
   */
  enabled?: boolean;
};
/**
 * Blending modes.
 */
export type BlendingMode =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;
export type CIMVectorTileDataConnection = CIMDataConnection & {
  /**
   * Gets or sets vendor specific parameters.
   */
  customParameters?: CIMStringMap[] | null;
  /**
   * Gets or sets the URI of the VectorTile files or resources.
   */
  uri?: null | string;
  /**
   * Gets or sets the URI of the binary reference containing the external resources.
   */
  resourcesURI?: null | string;
};
export type CIMDataConnection = CIMObject;

/**
 * Represents the base CIM object class.
 *
 */
export interface CIMObject {}
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
 * An abstract base class for objects that define geometric shapes. Geometry objects can be used
 * as geometry definitions for rendering data.
 */
export interface Geometry {
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
