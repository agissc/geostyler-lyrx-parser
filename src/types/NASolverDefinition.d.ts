/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Policy on when to return the from-edge in the network forward star adjacencies object.
 */
export type EsriNetworkForwardStarBacktrack = 0 | 1 | 2 | 3;
/**
 * Measurement units.
 */
export type EsriUnits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

/**
 * Represents a solver definition. This class is reserved for esri internal use only.
 */
export interface NASolverDefinition {
  /**
   * Gets and sets the applied travel mode.
   */
  appliedTravelMode?: null | NetworkTravelMode;
  /**
   * Gets and sets the applied travel mode as JSON.
   */
  appliedTravelModeJSON?: null | string;
  /**
   * Gets and sets the impedance attribute name.
   */
  impedanceAttributeName?: null | string;
  /**
   * Gets and sets the accumulate attribute names.
   */
  accumulateAttributeNames?: string[] | null;
  /**
   * Gets and sets the attribute names.
   */
  attributeNames?: string[] | null;
  /**
   * Gets and sets the restriction attribute names.
   */
  restrictionAttributeNames?: string[] | null;
  /**
   * Gets and sets a boolean which indicates if the hierarchy attribute for the network should be used in analysis.
   */
  useHierarchy?: boolean;
  /**
   * Gets and sets a setting which indicates how U-Turns should be restricted in the analysis.
   */
  restrictUTurns?: EsriNetworkForwardStarBacktrack;
  /**
   * Gets and sets the name of the hierarchy attribute to be used in analysis.
   */
  hierarchyAttributeName?: null | string;
  /**
   * Gets and sets the hierarchy level count.
   */
  hierarchyLevelCount?: number;
  /**
   * Gets and sets the maximum value of the hierarchy attribute.
   */
  hierarchyMaxValues?: number[] | null;
  /**
   * Gets and sets the number of lower level junctions to explore before searching the next hierarchy level.
   */
  hierarchyNumTransitions?: number[] | null;
  /**
   * Gets and sets a boolean which indicates whether or not to ignore invalid locations.
   */
  ignoreInvalidLocations?: boolean;
  /**
   * Gets and sets a boolean which indicates if the hierarchy ranges will be reset to the network dataset's hierarchy settings when the solver is bound.
   */
  resetHierarchyRangesOnBind?: boolean;
  /**
   * Gets and sets the attribute parameters values.
   */
  attributeParameterValues?: NAAttributeParameterValue[] | null;
  outputGeometryPrecision?: unknown;
  /**
   * Gets and sets the output geometry precision units.
   */
  outputGeometryPrecisionUnits?: EsriUnits;
  /**
   * Gets and sets the associated network build hash.
   */
  networkBuildHash?: number;
}
/**
 * Represents a network travel mode. This class is reserved for esri internal use only.
 */
export interface NetworkTravelMode {
  /**
   * Gets and sets the name.
   */
  name?: null | string;
  /**
   * Gets and sets the type.
   */
  type?: null | string;
  /**
   * Gets and sets the description.
   */
  description?: null | string;
  /**
   * Gets and sets the impedance attribute name.
   */
  impedanceAttributeName?: null | string;
  /**
   * Gets and sets the time attribute name.
   */
  timeAttributeName?: null | string;
  /**
   * Gets and sets the distance attribute name.
   */
  distanceAttributeName?: null | string;
  /**
   * Gets and sets the restriction attribute name.
   */
  restrictionAttributeNames?: string[] | null;
  /**
   * Gets and sets the attribute parameter values.
   */
  attributeParameterValues?: NetworkTravelModeParameterValue[] | null;
  /**
   * Gets and sets a boolean indicating whether or not to use the hierarchy.
   */
  useHierarchy?: boolean;
  /**
   * Gets and sets a setting which indicates how U-Turns should be restricted in the analysis as a string.
   */
  uturnAtJunctions?: null | string;
  /**
   * Gets and sets the output geometry precision.
   */
  simplificationTolerance?: null | number;
  /**
   * Gets and sets the output geometry precision units as a string.
   */
  simplificationToleranceUnits?: null | string;
}
/**
 * Represents a network travel mode parameter value. This class is reserved for esri internal use only.
 */
export interface NetworkTravelModeParameterValue {
  /**
   * Gets and sets the attribute name.
   */
  attributeName?: null | string;
  /**
   * Gets and sets the parameter name.
   */
  parameterName?: null | string;
  value?: unknown;
}
/**
 * Represents a network attribute parameter value. This class is reserved for esri internal use only.
 */
export interface NAAttributeParameterValue {
  /**
   * Gets and sets the attribute name.
   */
  attributeName?: null | string;
  /**
   * Gets and sets the parameter names.
   */
  parameterName?: null | string;
  /**
   * Gets and sets the variant type.
   */
  varType?: number;
  value?: unknown;
}
