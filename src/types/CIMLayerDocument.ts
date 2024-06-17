export type CIMLayerDocument = CIMVersion & {
    /**
     * Gets or sets an array of layer URIs stored in this layer document.
     */
    layers?: string[] | null
    /**
     * Gets or sets an array of table URIs stored in this layer document.
     */
    tables?: string[] | null
    /**
     * Gets or sets the layer definitions in the layer document.
     */
    layerDefinitions?: CIMDefinition[] | null
    /**
     * Gets or sets the binary references of the document.
     */
    binaryReferences?: CIMBinaryReference[] | null
    /**
     * Gets or sets the table definitions in the layer document.
     */
    tableDefinitions?: CIMDefinition[] | null
    /**
     * Gets or sets the name of the RGB color profile of this layer's source map.
     */
    rgbColorProfile?: null | string
    /**
     * Gets or sets the name of the CMYK color profile of this layer's source map.
     */
    cmykColorProfile?: null | string
    /**
     * Gets or sets the elevation surface layer definitions.
     */
    elevationSurfaceLayerDefinitions?: CIMDefinition[] | null
}
export type CIMVersion = CIMObject & {
    /**
     * Gets or sets document version. Set by the system.
     */
    version?: null | string
    /**
     * Gets or sets the build an item was created with. Set by the system.
     */
    build?: number
}
export type CIMDefinition = CIMObject & {
    /**
     * Gets or sets the name.
     */
    name?: null | string
    /**
     * Gets or sets the URI of the definition. Typically set by the system and used as an identifier.
     */
    uri?: null | string
    /**
     * Gets or sets the source URI of the item. Set if sourced from an external item such as an item on a portal.
     */
    sourceURI?: null | string
    /**
     * Gets or sets the time the source was last modified, as of the last sync. Used to detect when another sync is needed.
     */
    sourceModifiedTime?: null | TimeInstant
    /**
     * Gets or sets the metadata URI.
     */
    metadataURI?: null | string
    /**
     * Gets or sets a value indicating whether the CIM definition accesses metadata from its data source (the default behavior), or if it has its own metadata stored in the project.
     */
    useSourceMetadata?: boolean
    /**
     * Gets or sets the source portal URI of the item. Set if sourced from an external item such as an item on a portal.
     */
    sourcePortalUrl?: null | string
}
export type TimeInstant = TimeValue & {
    /**
     * Gets or sets the time.
     */
    time?: string
}
export type TimeValue = CIMObject & {
    /**
     * Gets or sets the time zone definition of the time.
     */
    timeReference?: null | TimeReference
}
export type TimeReference = CIMObject & {
    /**
     * Gets or sets the windows id for the time zone.
     */
    timeZoneNameID?: null | string
    /**
     * Gets or sets a value indicating if the time reference should honor daylight savings time.
     */
    respectsDaylightSavingTime?: boolean
    /**
     * Gets or sets a value indicating if the time reference should respect dynamic rules for adjusting with daylight savings time for specific years.
     */
    respectsDynamicAdjustmentRules?: boolean
}
export type CIMBinaryReference = CIMObject & {
    /**
     * Gets or sets the URI of the binary reference. Typically set by the system but used as a reference path.
     */
    uri?: null | string
    /**
     * Gets or sets the base64 encoded data of the binary reference.
     */
    data?: null | string
    /**
     * Gets or sets the stored CIM object.
     */
    object?: null | CIMObject
}

/**
 * Represents the base CIM object class.
 *
 */
export interface CIMObject { }
