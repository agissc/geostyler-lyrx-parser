/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CIMSliderSettings = CIMObject & {
  /**
   * Gets or sets the extent shown on the slider.
   */
  sliderExtent?: null | CIMRange;
  /**
   * Gets or sets a value indicating whether the slider extent will not change due to scrolling or using the mouse wheel.
   */
  sliderExtentLocked?: boolean;
  /**
   * Gets or sets a value indicating whether the slider's start thumb will not accept mouse events.
   */
  startValueLocked?: boolean;
  /**
   * Gets or sets a value indicating whether the slider's end thumb will not accept mouse events.
   */
  endValueLocked?: boolean;
  /**
   * Gets or sets a value indicating whether the slider is flipped vertically to put larger values at the bottom and smaller values at the top.
   */
  flipVertically?: boolean;
  /**
   * Gets or sets a value indicating whether the distance between the start and end thumbs will remain constant.
   */
  useWindowValue?: boolean;
  /**
   * Gets or sets the value of the window on the slider.
   */
  windowValue?: number;
  /**
   * Gets or sets the unit of the window on the slider.
   */
  windowUnit?: EsriTimeUnits;
  /**
   * Gets or sets a value indicating whether the step interval value will stay in sync with the sliders value window when possible.
   */
  stepUsesWindow?: boolean;
  /**
   * Gets or sets the specific distance to move the thumbs by when stepping or playing.
   */
  stepIntervalValue?: number;
  /**
   * Gets or sets the unit the interval value is in.
   */
  stepIntervalUnit?: EsriTimeUnits;
  /**
   * Gets or sets the number of steps to divide the slider extent into.
   */
  stepCount?: number;
  /**
   * Gets or sets the chosen method of determining the step size.
   */
  stepOption?: SliderStepType;
  /**
   * Gets or sets the URI of the layer to get step information from.
   */
  stepLayerURI?: null | string;
  /**
   * Gets or sets the amount of time to wait between steps.
   */
  playWaitSeconds?: number;
  /**
   * Gets or sets a value indicating whether the play direction is forward.
   */
  playForward?: boolean;
  /**
   * Gets or sets a value indicating whether play continuously repeats until interrupted by user interaction.
   */
  playRepeats?: boolean;
  /**
   * Gets or sets a value indicating whether play direction will reverse after playing to the end (if repeat is false play will move each direction once then stop).
   */
  playReverses?: boolean;
  /**
   * Gets or sets the option that determines the extent used by the full extent button.
   */
  fullExtentOption?: SliderExtentType;
  /**
   * Gets or sets the URI of the layer used for the full extent with single layer full extent option.
   */
  fullExtentLayerURI?: null | string;
  /**
   * Gets or sets the custom full extent used with the custom range full extent option.
   */
  fullExtentCustomRange?: null | CIMRange;
  /**
   * Gets or sets slider interaction mode.
   */
  interactionMode?: SliderInteractionMode;
  /**
   * Gets or sets a value indicating whether automatic snapping for the map's current time settings is enabled.
   */
  useTimeSnapping?: boolean;
  /**
   * Gets or sets the option that determines mode used for snapping the map's current time settings.
   */
  timeSnapMode?: TimeSnapMode;
  /**
   * Gets or sets the time unit to snap to when in 'Single' time snapping mode.
   */
  singleTimeSnapUnit?: EsriTimeUnits;
  /**
   * Gets or sets the string containing URI of the layer that contains the alias definition.
   */
  aliasExpressionLayerURI?: null | string;
  /**
   * Gets or sets a value indicating whether to collapse the slider over the map view.
   */
  isMinimized?: boolean;
  /**
   * Gets or sets a value indicating whether to ignore values not currently set to show on the slider.
   */
  ignoreInactiveValues?: boolean;
  /**
   * Gets or sets a value indicating whether the slider should continuously progress the slider to the current time.
   */
  liveMode?: boolean;
  /**
   * Gets or sets the direction to offset the time span relative to the current time.
   */
  liveModeOffsetDirection?: TimeOffsetDirection;
};
export type CIMRange = CIMObject & {
  /**
   * Gets or sets the minimum.
   */
  min?: number;
  /**
   * Gets or sets the maximum.
   */
  max?: number;
};
/**
 * Time units.
 */
export type EsriTimeUnits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
/**
 * Slider step types.
 *
 */
export type SliderStepType = 0 | 1 | 2;
/**
 * Slider extent types.
 *
 */
export type SliderExtentType = 0 | 1 | 2 | 3;
/**
 * Slider interaction modes.
 *
 */
export type SliderInteractionMode = 0 | 1;
/**
 * Mode used for snapping the map's current time settings.
 */
export type TimeSnapMode = 0 | 1 | 2;
/**
 * Time offset direction.
 *
 */
export type TimeOffsetDirection = 0 | 1 | 2;

/**
 * Represents the base CIM object class.
 *
 */
export interface CIMObject {}
