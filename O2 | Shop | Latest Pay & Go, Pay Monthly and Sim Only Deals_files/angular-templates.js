angular.module("shopApp").run(["$templateCache",function($templateCache){"use strict";$templateCache.put("common/contractLengthPicker.html",'<div><ul class="styled-group contract-length clear-row"><li ng-repeat="length in contractLengths" ui-sref="{{deviceAndContractState}}({ contractLength: length.value })" ng-class="{active: (length.value === contractLength)}" id="{{length.label}}"><p><a href="">{{length.label}}</a></p></li></ul></div>'),$templateCache.put("common/device.html",'<div class="device-wrapper" ng-repeat="device in devices"><a id="{{device.value}}-device-link" href="" ng-class="{active: (deviceType === device.value)}" ui-sref="{{deviceAndContractState}}({ deviceType: device.value })"><div class="device-image device-{{device.value}}"></div><div class="device-label">{{device.label}}</div></a></div>'),$templateCache.put("deviceListing/bannerTile.html",'<a class="banner-tile dark" href="{{tile.content.banner.cta.href}}" ng-if="tile.type == \'promo\'" data-qa-height="{{tile.size.renderHeight}}" data-qa-width="{{tile.size.renderWidth}}"><img data-qa-banner-tile-image alt="{{tile.content.banner.icon.altTxt}}" ng-src="{{tile.content.banner.icon.img}}"/><div class="banner-tile-copy"><h3 data-qa-promotion-content-heading>{{tile.content.banner.heading}}</h3><p data-qa-promotion-content-text>{{tile.content.banner.text}}</p></div><p ng-class="{\'cta\': tile.content.banner.cta.text != null}">{{tile.content.banner.cta.text}}</p><span class="hover-down"></span></a>'),$templateCache.put("deviceListing/deviceFeature.html",'<div class="device-feature"><div class="device-feature__icon device-feature__icon--{{heading | lowercase}}"></div><div class="device-feature__text"><strong>{{heading}}</strong><p>{{value}}</p></div></div>'),$templateCache.put("deviceListing/deviceRating.html",'<div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating" custom-attribute="data-qa-rating={{rating}}"><div class="star-rating" aria-hidden="true">★★★★★<div class="star-rating__stars" ng-style="{\'width\': \'\' + (rating || 0) * 20 + \'%\'}" aria-hidden="true">★★★★★</div></div><div class="device-rating__text"><span itemprop="ratingValue">{{rating | number:1}}</span> out of <span itemprop="bestRating">5</span> stars</div></div>'),$templateCache.put("deviceListing/deviceTile.html",'<div class="device-tile-wrapper"><a class="device-tile" href="{{links.touchPointContext}}{{tile.urlPathForDevice}}/#contractType={{contractType}}" ng-if="tile.type == \'device\' || tile.type ==\'accessory\'" data-qa-tile-selector ng-class="{\'device-layout-1\': tile.size.renderWidth===2, \'device-layout-2\': tile.size.renderHeight===1}" data-qa-device-brand="{{tile.content.brand.canonical}}" data-qa-device-model-family="{{tile.content.modelFamily.text}}" data-qa-device-condition="{{tile.content.filtering.condition}}" data-qa-device-operating-system="{{tile.content.filtering.operatingSystem}}" data-qa-device-offer="{{tile.content.filtering.offer}}" data-qa-device-category="{{tile.content.category.canonical}}" data-qa-device-features="{{tile.content.filtering.nfc && \'nfc \' || \'\'}}{{tile.content.filtering[\'4g\'] && \'4g \' || \'\'}}{{tile.content.filtering.splashProof && \'splashProof \' || \'\'}}{{tile.content.filtering.hdCamera && \'hdCamera \' || \'\'}}{{tile.content.filtering.removableBattery && \'removableBattery \' || \'\'}}{{tile.content.filtering.wifi && \'wifi \' || \'\'}}{{tile.content.filtering.gsm && \'gsm \' || \'\'}}{{tile.content.filtering.bluetooth && \'bluetooth \' || \'\'}}" data-qa-device-availability="{{tile.content.filtering.availability}}" data-qa-device-contract-type="{{contractType}}" data-qa-height="{{tile.size.renderHeight}}" data-qa-width="{{tile.size.renderWidth}}" manual_cm_re="{{coreMetricsRealEstateTag}}"><div class="sash" ng-if="tile.content.media.text.sash"><p class="sash-content" data-qa-sash-text>{{tile.content.media.text.sash}}</p></div><div class="device-tile__top"><img data-qa-device-image class="device-image" ng-src="{{links.imageContext}}{{getListingImageFor(tile)}}"/><div class="rating-colours"><div class="device-rating" rating="{{tile.content.media.rating}}" count="{{tile.content.media.ratingCount}}" ng-if="tile.content.media.rating !== undefined"></div><div class="colours" data-qa-device-filter-colours="{{tile.content.filtering.colour}}"><span class="swatch" ng-repeat="colour in tile.content.colours" data-qa-device-colour="{{colour.code}}" ng-style="{\'background-color\': colour.code}"></span></div></div><p class="details" data-qa-device-title data-qa-canonical-brand="{{tile.content.brand.canonical}}" data-qa-canonical-modelfamily="{{tile.content.modelFamily.canonical}}"><span data-qa-device-brand>{{tile.content.brand.text}}</span> <span data-qa-device-modelfamily>{{tile.content.modelFamily.text}}</span></p><div class="ribbon" ng-if="tile.content.media.text.ribbon && (sortField ===\'content.sorting.featured\' || sortField.indexOf(\'Cost\') >= 0)" data-qa-ribbon><p class="ribbon__text">{{tile.content.media.text.ribbon}}</p></div><device-feature heading="Screen" value="{{tile.content.features.screenSize}}" data-qa-screen-size="{{tile.content.sorting.screenSize}}" ng-if="sortField === \'-content.sorting.screenSize\'"></device-feature><device-feature heading="Weight" value="{{tile.content.features.weight}}" data-qa-weight="{{tile.content.sorting.weight}}" ng-if="sortField === \'content.sorting.weight\'"></device-feature><device-feature heading="Battery" value="{{tile.content.features.batteryLife}}" data-qa-battery-life="{{tile.content.sorting.batteryLife}}" ng-if="sortField === \'-content.sorting.batteryLife\'"></device-feature><device-feature heading="Camera" value="{{tile.content.features.cameraResolution}}" data-qa-camera-resolution="{{tile.content.sorting.cameraResolution}}" ng-if="sortField === \'-content.sorting.cameraResolution\'"></device-feature></div><div class="device-tile__bottom" ng-if="tile.content.availability != \'comingSoon\'"><p class="costs" ng-if="costDisplayType === \'monthly\'" data-qa-device-monthly-cost="{{tile.content.minimumTariffs.monthly.pounds}}.{{tile.content.minimumTariffs.monthly.pence}}" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.monthly.pounds}}<span class="pence">.{{tile.content.minimumTariffs.monthly.pence | formatPenceFilter}}</span></span> a month + {{tile.content.minimumTariffs.oneOff.pounds + (tile.content.minimumTariffs.oneOff.pence/100) | currency:\'£\'}} upfront</p><p class="costs" ng-if="costDisplayType === \'oneoff\'" data-qa-device-monthly-cost="{{tile.content.minimumTariffs.monthly.pounds}}.{{tile.content.minimumTariffs.monthly.pence}}" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.oneOff.pounds}}<span class="pence">.{{tile.content.minimumTariffs.oneOff.pence | formatPenceFilter}}</span></span> up front + {{tile.content.minimumTariffs.monthly.pounds + (tile.content.minimumTariffs.monthly.pence/100) | currency:\'£\'}} a month</p><p class="costs" ng-if="costDisplayType === \'payasyougo\'" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.oneOff.pounds}}<span class="pence">.{{tile.content.minimumTariffs.oneOff.pence | formatPenceFilter}}</span></span> on Pay &amp; Go</p><p class="costs" ng-if="costDisplayType === \'nonconnected\'" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}"><span class="headline">&pound;{{tile.content.minimumTariffs.oneOff.pounds}}<span class="pence">.{{tile.content.minimumTariffs.oneOff.pence | formatPenceFilter}}</span></span></p></div><span class="hover-down"></span></a><div class="compare-checkboxes" ng-if="tile.hasOwnProperty(\'compare\')" ng-class="{\'compare-selected\': tile.compare, \'compare-deselected\': !tile.compare}"><label ng-class="{\'compare-disabled\': !tile.compare && devicesToCompare().length>=3 }" data-qa-compare-label data-qa-is-selected="{{tile.compare}}" ng-model="tile.compare"><span ng-if="!tile.compare"><span class="plus"></span></span> <span ng-if="tile.compare"><span class="minus"></span></span><!--[if IE 8]><input style="height:0;" ng-disabled="!tile.compare && devicesToCompare().length>=3" ng-model="tile.compare" ng-change="changeDevicesToCompare()" type="checkbox" class="tile-checkbox\' ng-name="deviceSelection" value="{{tile.content.brand.text}} {{tile.content.modelFamily.text}}"\n            data-qa-compare-checkbox data-qa-is-selected="{{tile.compare}}"><![endif]--> <input style="display:none" ng-disabled="!tile.compare && devicesToCompare().length>=3" ng-model="tile.compare" ng-change="changeDevicesToCompare()" type="checkbox" class="tile-checkbox\' ng-name=" deviceSelection value="{{tile.content.brand.text}} {{tile.content.modelFamily.text}}" data-qa-compare-checkbox data-qa-is-selected="{{tile.compare}}"><span class="compare-text">Compare<span></span></span></label></div></div>'),$templateCache.put("deviceListing/emptyTile.html",'<div class="device-tile" ng-class="{\'device-layout-1\': tile.size.renderWidth===2, \'device-layout-2\': tile.size.renderHeight===1}" data-qa-height="{{tile.size.renderHeight}}" data-qa-width="{{tile.size.renderWidth}}"><div class="device-tile__top"><p><span data-qa-empty-tile-id>Content not available for {{tile.content.id}}</span></p></div><span class="hover-down"></span></div>'),$templateCache.put("deviceListing/filterSection.html",'<div class="section {{section | lowercase}}" ng-show="isFilterSectionRequired(section)"><h3>{{sectionHeading}}</h3><ul class="filter-sort-list"><li ng-show="$index < filterItemLimit" ng-repeat="sectionItem in filterOptions.filtering[section]" ng-class="{\'empty-filter-field\': !filterCounts[filterCountName][sectionItem.canonical]}"><label><input custom-attribute="data-qa-{{section}}-filter-class" type="checkbox" value="{{sectionItem.canonical}}" ng-model="sectionItem.checked" ng-disabled="isFilterDisabled(filterCounts[filterCountName], sectionItem.canonical)" ng-click="cmCreatePageElementTag(sectionHeading.toUpperCase() + \' | \' + sectionItem.text, cmFilterAction, !sectionItem.checked)"/> <span custom-attribute="data-qa-{{section}}-filter">{{sectionItem.text}}</span> <span custom-attribute="data-qa-{{section}}-filter-count" class="item-count">({{filterCounts[filterCountName][sectionItem.canonical] || 0}})</span></label></li></ul><a custom-attribute="data-qa-{{section}}-filter-more-link" ng-if="filterOptions.filtering[section].length > filterItemLimit" href="#" class="filterLimitLink" ng-click="showMoreOrLess();$event.preventDefault();"><span>More</span></a></div>'),$templateCache.put("deviceListing/tile.html",'<div ng-cloak class="tile" ng-class="{\'large-tile\': tile.size.renderWidth===2, \'small-tile\': tile.size.renderHeight===1, \'portrait\': tile.template===\'Portrait\', \'landscape\': tile.template===\'Landscape\', \'comparable\': tile.hasOwnProperty(\'compare\')}" data-qa-tile data-qa-is-banner="{{tile.type == \'promo\'}}" data-qa-is-empty-tile="{{tile.type == \'empty\'}}" data-qa-subTypeGroup="{{tile.content.subTypeGroup}}"><div banner-tile contents="tile" cost-display-type="costDisplayType" sort-field="sortField" ng-if="tile.type == \'promo\'"></div><div device-tile contents="tile" cost-display-type="costDisplayType" devices-to-compare="devicesToCompare" change-devices-to-compare="changeDevicesToCompare" contract-type="contractType" sort-field="sortField" links="links" get-listing-image-for="getListingImageFor" ng-if="tile.type == \'device\' || tile.type == \'accessory\'"></div><div empty-tile contents="tile" sort-field="sortField" ng-if="tile.type == \'empty\'"></div></div>'),$templateCache.put("deviceDetails/capacityPicker.html",'<div><div ng-if="docked || model.isAccessory"><label ng-if="!docked && model.isAccessory">Capacity: {{accessory}}</label><select data-qa-floatingBar-capacity ng-class="model.isAccessory ? \'accessory-option\' : \'memory-select\'" ng-model="$parent.memory" ng-options="memory.label for memory in model.getMemories() track by memory.canonical" ng-change="capacityClick()"></select></div><div ng-if="!docked && !model.isAccessory"><label>Capacity:</label><ul class="styled-group device-capacity"><li ng-repeat="memory in model.getMemories()" ng-click="capacityClick()" ng-class="{active: (memory.canonical === model.selectedMemory)}" data-qa-variants-capacity="{{memory.label}}"><p><a href="#">{{memory.label}}</a></p></li></ul></div></div>'),$templateCache.put("deviceDetails/colourPicker.html",'<div><div class="colour-wrapper" ng-if="docked || model.isAccessory"><label ng-if="!docked && model.isAccessory">Colour:</label><select data-qa-floatingBar-colour ng-class="model.isAccessory ? \'accessory-option\' : \'colour-select\'" ng-model="$parent.colour" ng-options="colour as colour.label for colour in model.getColours() track by colour.code" ng-change="colourClick()" ng-init="setSelectedColour()"></select></div><div class="colour-wrapper" ng-if="!docked && !model.isAccessory"><label>Colour:</label><ul class="styled-group device-color"><li ng-repeat="colour in model.getColours()"><a href="#" title="{{colour.label}}" ng-click="colourClick()" ng-style="{background:colour.code}" ng-class="{active:(colour.canonical === model.selectedColour)}" class="{{colour.canonical}}" data-qa-variants-colour="{{colour.label}}"></a></li></ul><p class="selected-colour" ng-bind="getSelectedColour().label"></p></div></div>'),$templateCache.put("deviceDetails/connectivityPicker.html",'<div><div ng-if="docked"><select class="connectivity-select" ng-model="$parent.connectivity" ng-options="connectivity.label for connectivity in model.getConnectivitiesArray() track by connectivity.canonical" ng-change="connectivityClick()" ng-init="setSelectedConnectivity()"></select></div><div ng-if="!docked"><label>Network:</label><ul class="styled-group device-connection"><li ng-repeat="connectivity in model.getConnectivities()" ng-click="connectivityClick()" ng-class="{active:(connectivity.canonical === model.selectedConnectivity)}" data-qa-variants-connectivity="{{connectivity.label}}"><p><a href="">{{connectivity.label}}</a></p></li></ul></div></div>'),$templateCache.put("deviceDetails/deviceTile.html",'<a class="device-tile" data-qa-tile-selector href="{{deviceDetailUrl}}" ng-class="{\'device-layout-1\': tile.size.width===2, \'device-layout-2\': tile.size.height===1, \'active\': isActive(tile)}" data-qa-device-brand="{{tile.content.brand.canonical}}" data-qa-device-model-family="{{tile.content.modelFamily.text}}" data-qa-device-availability="{{tile.content.availability}}" data-qa-device-contract-type="{{contractType}}"><div class="sash" ng-if="tile.content.media.text.sash"><p class="sash-content" data-qa-sash-text>{{tile.content.media.text.sash}}</p></div><div class="device-tile__top"><img class="device-image" ng-src="{{links.imageContext}}{{tile.content.media.images.single}}"/><div class="rating-colours"><div class="device-rating" rating="{{tile.content.media.rating}}" count="{{tile.content.media.ratingCount}}" ng-if="tile.content.media.rating !== undefined"></div><div class="colours"><span class="swatch" ng-repeat="colour in tile.content.colours" data-qa-device-colour="{{colour.code}}" ng-style="{\'background-color\': colour.code}"></span></div></div><p class="details" data-qa-device-title><span data-qa-device-brand>{{tile.content.brand.text}}</span> <span data-qa-device-modelfamily>{{tile.content.modelFamily.text}}</span></p><div class="ribbon" data-qa-ribbon ng-class="{\'no-bg\': tile.content.media.text.ribbon === null }"><p class="ribbon__text">{{tile.content.media.text.ribbon}}</p></div></div><div class="device-tile__bottom" ng-if="tile.content.availability != \'comingSoon\'"><p class="costs" ng-if="tile.content.contractType === \'paymonthly\'" data-qa-device-monthly-cost="{{tile.content.minimumTariffs.monthly.pounds}}.{{tile.content.minimumTariffs.monthly.pence}}" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.monthly.pounds}}<span class="pence">.{{tile.content.minimumTariffs.monthly.pence | formatPenceFilter}}</span></span> a month + {{tile.content.minimumTariffs.oneOff.pounds + (tile.content.minimumTariffs.oneOff.pence/100) | currency:\'£\'}} upfront</p><p class="costs" ng-if="tile.content.contractType === \'payasyougo\'" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.oneOff.pounds}}<span class="pence">.{{tile.content.minimumTariffs.oneOff.pence | formatPenceFilter}}</span></span> on Pay &amp; Go</p><p class="costs" ng-if="tile.content.contractType === \'nonconnected\'" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}"><span class="headline">&pound;{{tile.content.minimumTariffs.oneOff.pounds}}<span class="pence">.{{tile.content.minimumTariffs.oneOff.pence | formatPenceFilter}}</span></span></p></div><span class="hover-down"></span></a>'),$templateCache.put("deviceDetails/sizePicker.html",'<div><label ng-if="!docked">Size:</label><select class="accessory-option" ng-model="size" ng-options="size.label for size in model.getSizesArray() track by size.canonical" ng-change="sizeClick()" ng-init="size = model.getSelectedSize()"></select></div>'),$templateCache.put("upgradeOptions/capacityPicker.html",'<div><label class="subsection-label">Select phone capacity</label><ul class="styled-group device-capacity clear-row"><li ng-repeat="memory in model.getMemories()" ng-click="capacityClick()" ng-class="{active: (memory.canonical === model.selectedMemory)}" data-qa-variants-capacity="{{memory.label}}"><p><a href="">{{memory.label}}</a></p></li></ul></div>'),$templateCache.put("upgradeOptions/colourPicker.html",'<div class="colour-wrapper"><label class="subsection-label">Select colour</label><ul class="styled-group device-color clear-row"><li ng-repeat="colour in model.getColours()"><a href="" title="{{colour.label}}" ng-click="colourClick()" ng-style="{background:colour.code}" ng-class="{active:(colour.canonical === model.selectedColour)}" class="{{colour.canonical}}" data-qa-variants-colour="{{colour.label}}"></a></li></ul></div>'),$templateCache.put("upgradeOptions/connectivityPicker.html",'<div><label class="subsection-label">Select network</label><ul class="styled-group device-connection clear-row"><li ng-repeat="connectivity in model.getConnectivities()" ng-click="connectivityClick()" ng-class="{active:(connectivity.canonical === model.selectedConnectivity)}" data-qa-variants-connectivity="{{connectivity.label}}"><p><a href="">{{connectivity.label}}</a></p></li></ul></div>'),$templateCache.put("upgradeOptions/deviceTile.html",'<a class="device-tile" ng-click="setCurrentDevice(tile.content.id)" data-qa-tile-selector ng-class="{\'device-layout-1\': tile.size.width===2, \'device-layout-2\': tile.size.height===1, \'active\': isActive(tile)}" data-qa-device-brand="{{tile.content.brand.canonical}}" data-qa-device-model-family="{{tile.content.modelFamily.text}}" data-qa-device-availability="{{tile.content.availability}}" data-qa-device-contract-type="{{contractType}}"><div class="sash" ng-if="tile.content.media.text.sash"><p class="sash-content" data-qa-sash-text>{{tile.content.media.text.sash}}</p></div><div class="device-tile__top"><img class="device-image" ng-src="{{links.imageContext}}{{tile.content.media.images.single}}"/><div class="rating-colours"><div class="device-rating" rating="{{tile.content.media.rating}}" count="{{tile.content.media.ratingCount}}" ng-if="tile.content.media.rating !== undefined"></div><div class="colours"><span class="swatch" ng-repeat="colour in tile.content.colours" data-qa-device-colour="{{colour.code}}" ng-style="{\'background-color\': colour.code}"></span></div></div><p class="details" data-qa-device-title><span data-qa-device-brand>{{tile.content.brand.text}}</span> <span data-qa-device-modelfamily>{{tile.content.modelFamily.text}}</span></p><div class="ribbon" data-qa-ribbon ng-class="{\'no-bg\': tile.content.media.text.ribbon === null }"><p class="ribbon__text">{{tile.content.media.text.ribbon}}</p></div></div><div class="device-tile__bottom" ng-if="tile.content.availability != \'comingSoon\'"><p class="costs" ng-if="costDisplayType === \'monthly\'" data-qa-device-monthly-cost="{{tile.content.minimumTariffs.monthly.pounds}}.{{tile.content.minimumTariffs.monthly.pence}}" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.monthly.pounds}}<span class="pence">.{{tile.content.minimumTariffs.monthly.pence | formatPenceFilter}}</span></span> a month + {{tile.content.minimumTariffs.oneOff.pounds + (tile.content.minimumTariffs.oneOff.pence/100) | currency:\'£\'}} upfront</p><button type="button" class="button secondary full-width bottom" ng-class="{\'dashed\': isActive(tile)}">{{isActive(tile) ? "Selected" : "Select"}}</button></div><span class="hover-down"></span></a>'),$templateCache.put("upgradeOptions/dynamicDataVoicePlan.html",'<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title></title></head><body></body></html>'),$templateCache.put("upgradeOptions/listingDeviceTile.html",'<div class="device-tile-wrapper"><a class="device-tile" href="{{deviceDetailUrl}}" data-qa-tile-selector ng-class="{\'device-layout-1\': tile.size.width===2 || tileSize === \'2x2\', \'device-layout-2\': tile.size.height===1 || tileSize === \'1x1\'}" data-qa-device-brand="{{tile.content.brand.canonical}}" data-qa-device-model-family="{{tile.content.modelFamily.text}}" data-qa-device-availability="{{tile.content.filtering.availability}}" data-qa-device-contract-type="{{contractType}}"><div class="sash" ng-if="tile.content.media.text.sash"><p class="sash-content" data-qa-sash-text>{{tile.content.media.text.sash}}</p></div><div class="device-tile__top"><img data-qa-device-image class="device-image" ng-src="{{links.imageContext}}{{getListingImageFor(tile)}}"/><div class="rating-colours"><div class="device-rating" rating="{{tile.content.media.rating}}" count="{{tile.content.media.ratingCount}}" ng-if="tile.content.media.rating !== undefined"></div><div class="colours" data-qa-device-filter-colours="{{tile.content.filtering.colour}}"><span class="swatch" ng-repeat="colour in tile.content.colours" data-qa-device-colour="{{colour.code}}" ng-style="{\'background-color\': colour.code}"></span></div></div><p class="details" data-qa-device-title data-qa-canonical-brand="{{tile.content.brand.canonical}}" data-qa-canonical-modelfamily="{{tile.content.modelFamily.canonical}}"><span data-qa-device-brand>{{tile.content.brand.text}}</span> <span data-qa-device-modelfamily>{{tile.content.modelFamily.text}}</span></p><div class="ribbon" ng-if="tile.content.media.text.ribbon && (sortField ===\'content.sorting.featured\' || sortField.indexOf(\'Cost\') >= 0)" data-qa-ribbon><p class="ribbon__text">{{tile.content.media.text.ribbon}}</p></div></div><div class="device-tile__bottom" ng-if="tile.content.availability != \'comingSoon\'"><p class="costs" ng-if="costDisplayType === \'monthly\'" data-qa-device-monthly-cost="{{tile.content.minimumTariffs.monthly.pounds}}.{{tile.content.minimumTariffs.monthly.pence}}" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.monthly.pounds}}<span class="pence">.{{tile.content.minimumTariffs.monthly.pence | formatPenceFilter}}</span></span> a month + {{tile.content.minimumTariffs.oneOff.pounds + (tile.content.minimumTariffs.oneOff.pence/100) | currency:\'£\'}} upfront</p><p class="costs" ng-if="costDisplayType === \'oneoff\'" data-qa-device-monthly-cost="{{tile.content.minimumTariffs.monthly.pounds}}.{{tile.content.minimumTariffs.monthly.pence}}" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.oneOff.pounds}}<span class="pence">.{{tile.content.minimumTariffs.oneOff.pence | formatPenceFilter}}</span></span> up front + {{tile.content.minimumTariffs.monthly.pounds + (tile.content.minimumTariffs.monthly.pence/100) | currency:\'£\'}} a month</p><p class="costs" ng-if="costDisplayType === \'payasyougo\'" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}">From <span class="headline">&pound;{{tile.content.minimumTariffs.oneOff.pounds}}<span class="pence">.{{tile.content.minimumTariffs.oneOff.pence | formatPenceFilter}}</span></span> on Pay &amp; Go</p><p class="costs" ng-if="costDisplayType === \'nonconnected\'" data-qa-device-upfront-cost="{{tile.content.minimumTariffs.oneOff.pounds}}.{{tile.content.minimumTariffs.oneOff.pence}}" data-qa-device-ratings="{{tile.content.media.rating}}"><span class="headline">&pound;{{tile.content.minimumTariffs.oneOff.pounds}}<span class="pence">.{{tile.content.minimumTariffs.oneOff.pence | formatPenceFilter}}</span></span></p></div><span class="hover-down"></span></a></div>')}]);