<template>
  <div class="icons">
      <Header title="双击文字复制"/>

        <div class="icons-item"><i class="x-icon x-icon-ios-add"></i>
            <p @click="copy">ios-add</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-add"></i>
            <p @click="copy">md-add</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-add-circle"></i>
            <p @click="copy">ios-add-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-add-circle-outline"></i>
            <p @click="copy">ios-add-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-add-circle"></i>
            <p @click="copy">md-add-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-alarm"></i>
            <p @click="copy">ios-alarm</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-alarm-outline"></i>
            <p @click="copy">ios-alarm-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-alarm"></i>
            <p @click="copy">md-alarm</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-albums"></i>
            <p @click="copy">ios-albums</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-albums-outline"></i>
            <p @click="copy">ios-albums-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-albums"></i>
            <p @click="copy">md-albums</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-alert"></i>
            <p @click="copy">ios-alert</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-alert-outline"></i>
            <p @click="copy">ios-alert-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-alert"></i>
            <p @click="copy">md-alert</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-american-football"></i>
            <p @click="copy">ios-american-football</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-american-football-outline" ></i>
            <p @click="copy">ios-american-football-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-american-football"></i>
            <p @click="copy">md-american-football</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-analytics"></i>
            <p @click="copy">ios-analytics</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-analytics-outline"></i>
            <p @click="copy">ios-analytics-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-analytics"></i>
            <p @click="copy">md-analytics</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-android"></i>
            <p @click="copy">logo-android</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-angular"></i>
            <p @click="copy">logo-angular</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-aperture"></i>
            <p @click="copy">ios-aperture</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-aperture-outline"></i>
            <p @click="copy">ios-aperture-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-aperture"></i>
            <p @click="copy">md-aperture</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-apple"></i>
            <p @click="copy">logo-apple</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-apps"></i>
            <p @click="copy">ios-apps</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-apps-outline"></i>
            <p @click="copy">ios-apps-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-apps"></i>
            <p @click="copy">md-apps</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-appstore"></i>
            <p @click="copy">ios-appstore</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-appstore-outline"></i>
            <p @click="copy">ios-appstore-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-appstore"></i>
            <p @click="copy">md-appstore</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-archive"></i>
            <p @click="copy">ios-archive</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-archive-outline"></i>
            <p @click="copy">ios-archive-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-archive"></i>
            <p @click="copy">md-archive</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-back"></i>
            <p @click="copy">ios-arrow-back</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-back"></i>
            <p @click="copy">md-arrow-back</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-down"></i>
            <p @click="copy">ios-arrow-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-down"></i>
            <p @click="copy">md-arrow-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-dropdown"></i>
            <p @click="copy">ios-arrow-dropdown</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-dropdown"></i>
            <p @click="copy">md-arrow-dropdown</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-dropdown-circle"></i>
            <p @click="copy">ios-arrow-dropdown-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-dropdown-circle"></i>
            <p @click="copy">md-arrow-dropdown-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-dropleft"></i>
            <p @click="copy">ios-arrow-dropleft</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-dropleft"></i>
            <p @click="copy">md-arrow-dropleft</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-dropleft-circle"></i>
            <p @click="copy">ios-arrow-dropleft-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-dropleft-circle"></i>
            <p @click="copy">md-arrow-dropleft-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-dropright"></i>
            <p @click="copy">ios-arrow-dropright</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-dropright"></i>
            <p @click="copy">md-arrow-dropright</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-arrow-dropright-circle" ></i>
            <p @click="copy">ios-arrow-dropright-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-dropright-circle"></i>
            <p @click="copy">md-arrow-dropright-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-dropup"></i>
            <p @click="copy">ios-arrow-dropup</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-dropup"></i>
            <p @click="copy">md-arrow-dropup</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-dropup-circle"></i>
            <p @click="copy">ios-arrow-dropup-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-dropup-circle"></i>
            <p @click="copy">md-arrow-dropup-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-forward"></i>
            <p @click="copy">ios-arrow-forward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-forward"></i>
            <p @click="copy">md-arrow-forward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-round-back"></i>
            <p @click="copy">ios-arrow-round-back</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-round-back"></i>
            <p @click="copy">md-arrow-round-back</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-round-down"></i>
            <p @click="copy">ios-arrow-round-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-round-down"></i>
            <p @click="copy">md-arrow-round-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-round-forward"></i>
            <p @click="copy">ios-arrow-round-forward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-round-forward"></i>
            <p @click="copy">md-arrow-round-forward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-round-up"></i>
            <p @click="copy">ios-arrow-round-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-round-up"></i>
            <p @click="copy">md-arrow-round-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-arrow-up"></i>
            <p @click="copy">ios-arrow-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-arrow-up"></i>
            <p @click="copy">md-arrow-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-at"></i>
            <p @click="copy">ios-at</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-at-outline"></i>
            <p @click="copy">ios-at-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-at"></i>
            <p @click="copy">md-at</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-attach"></i>
            <p @click="copy">ios-attach</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-attach"></i>
            <p @click="copy">md-attach</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-backspace"></i>
            <p @click="copy">ios-backspace</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-backspace-outline"></i>
            <p @click="copy">ios-backspace-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-backspace"></i>
            <p @click="copy">md-backspace</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-barcode"></i>
            <p @click="copy">ios-barcode</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-barcode-outline"></i>
            <p @click="copy">ios-barcode-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-barcode"></i>
            <p @click="copy">md-barcode</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-baseball"></i>
            <p @click="copy">ios-baseball</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-baseball-outline"></i>
            <p @click="copy">ios-baseball-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-baseball"></i>
            <p @click="copy">md-baseball</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-basket"></i>
            <p @click="copy">ios-basket</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-basket-outline"></i>
            <p @click="copy">ios-basket-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-basket"></i>
            <p @click="copy">md-basket</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-basketball"></i>
            <p @click="copy">ios-basketball</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-basketball-outline"></i>
            <p @click="copy">ios-basketball-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-basketball"></i>
            <p @click="copy">md-basketball</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-battery-charging"></i>
            <p @click="copy">ios-battery-charging</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-battery-charging"></i>
            <p @click="copy">md-battery-charging</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-battery-dead"></i>
            <p @click="copy">ios-battery-dead</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-battery-dead"></i>
            <p @click="copy">md-battery-dead</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-battery-full"></i>
            <p @click="copy">ios-battery-full</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-battery-full"></i>
            <p @click="copy">md-battery-full</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-beaker"></i>
            <p @click="copy">ios-beaker</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-beaker-outline"></i>
            <p @click="copy">ios-beaker-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-beaker"></i>
            <p @click="copy">md-beaker</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-beer"></i>
            <p @click="copy">ios-beer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-beer-outline"></i>
            <p @click="copy">ios-beer-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-beer"></i>
            <p @click="copy">md-beer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bicycle"></i>
            <p @click="copy">ios-bicycle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bicycle"></i>
            <p @click="copy">md-bicycle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-bitcoin"></i>
            <p @click="copy">logo-bitcoin</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bluetooth"></i>
            <p @click="copy">ios-bluetooth</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bluetooth"></i>
            <p @click="copy">md-bluetooth</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-boat"></i>
            <p @click="copy">ios-boat</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-boat-outline"></i>
            <p @click="copy">ios-boat-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-boat"></i>
            <p @click="copy">md-boat</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-body"></i>
            <p @click="copy">ios-body</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-body-outline"></i>
            <p @click="copy">ios-body-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-body"></i>
            <p @click="copy">md-body</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bonfire"></i>
            <p @click="copy">ios-bonfire</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bonfire-outline"></i>
            <p @click="copy">ios-bonfire-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bonfire"></i>
            <p @click="copy">md-bonfire</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-book"></i>
            <p @click="copy">ios-book</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-book-outline"></i>
            <p @click="copy">ios-book-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-book"></i>
            <p @click="copy">md-book</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bookmark"></i>
            <p @click="copy">ios-bookmark</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bookmark-outline"></i>
            <p @click="copy">ios-bookmark-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bookmark"></i>
            <p @click="copy">md-bookmark</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bookmarks"></i>
            <p @click="copy">ios-bookmarks</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bookmarks-outline"></i>
            <p @click="copy">ios-bookmarks-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bookmarks"></i>
            <p @click="copy">md-bookmarks</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bowtie"></i>
            <p @click="copy">ios-bowtie</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bowtie-outline"></i>
            <p @click="copy">ios-bowtie-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bowtie"></i>
            <p @click="copy">md-bowtie</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-briefcase"></i>
            <p @click="copy">ios-briefcase</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-briefcase-outline"></i>
            <p @click="copy">ios-briefcase-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-briefcase"></i>
            <p @click="copy">md-briefcase</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-browsers"></i>
            <p @click="copy">ios-browsers</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-browsers-outline"></i>
            <p @click="copy">ios-browsers-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-browsers"></i>
            <p @click="copy">md-browsers</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-brush"></i>
            <p @click="copy">ios-brush</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-brush-outline"></i>
            <p @click="copy">ios-brush-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-brush"></i>
            <p @click="copy">md-brush</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-buffer"></i>
            <p @click="copy">logo-buffer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bug"></i>
            <p @click="copy">ios-bug</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bug-outline"></i>
            <p @click="copy">ios-bug-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bug"></i>
            <p @click="copy">md-bug</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-build"></i>
            <p @click="copy">ios-build</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-build-outline"></i>
            <p @click="copy">ios-build-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-build"></i>
            <p @click="copy">md-build</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bulb"></i>
            <p @click="copy">ios-bulb</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bulb-outline"></i>
            <p @click="copy">ios-bulb-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bulb"></i>
            <p @click="copy">md-bulb</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bus"></i>
            <p @click="copy">ios-bus</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-bus-outline"></i>
            <p @click="copy">ios-bus-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-bus"></i>
            <p @click="copy">md-bus</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cafe"></i>
            <p @click="copy">ios-cafe</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cafe-outline"></i>
            <p @click="copy">ios-cafe-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cafe"></i>
            <p @click="copy">md-cafe</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-calculator"></i>
            <p @click="copy">ios-calculator</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-calculator-outline"></i>
            <p @click="copy">ios-calculator-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-calculator"></i>
            <p @click="copy">md-calculator</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-calendar"></i>
            <p @click="copy">ios-calendar</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-calendar-outline"></i>
            <p @click="copy">ios-calendar-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-calendar"></i>
            <p @click="copy">md-calendar</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-call"></i>
            <p @click="copy">ios-call</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-call-outline"></i>
            <p @click="copy">ios-call-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-call"></i>
            <p @click="copy">md-call</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-camera"></i>
            <p @click="copy">ios-camera</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-camera-outline"></i>
            <p @click="copy">ios-camera-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-camera"></i>
            <p @click="copy">md-camera</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-car"></i>
            <p @click="copy">ios-car</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-car-outline"></i>
            <p @click="copy">ios-car-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-car"></i>
            <p @click="copy">md-car</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-card"></i>
            <p @click="copy">ios-card</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-card-outline"></i>
            <p @click="copy">ios-card-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-card"></i>
            <p @click="copy">md-card</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cart"></i>
            <p @click="copy">ios-cart</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cart-outline"></i>
            <p @click="copy">ios-cart-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cart"></i>
            <p @click="copy">md-cart</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cash"></i>
            <p @click="copy">ios-cash</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cash-outline"></i>
            <p @click="copy">ios-cash-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cash"></i>
            <p @click="copy">md-cash</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-chatboxes"></i>
            <p @click="copy">ios-chatboxes</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-chatboxes-outline"></i>
            <p @click="copy">ios-chatboxes-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-chatboxes"></i>
            <p @click="copy">md-chatboxes</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-chatbubbles"></i>
            <p @click="copy">ios-chatbubbles</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-chatbubbles-outline"></i>
            <p @click="copy">ios-chatbubbles-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-chatbubbles"></i>
            <p @click="copy">md-chatbubbles</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-checkbox"></i>
            <p @click="copy">ios-checkbox</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-checkbox-outline"></i>
            <p @click="copy">ios-checkbox-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-checkbox"></i>
            <p @click="copy">md-checkbox</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-checkbox-outline"></i>
            <p @click="copy">md-checkbox-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-checkmark"></i>
            <p @click="copy">ios-checkmark</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-checkmark"></i>
            <p @click="copy">md-checkmark</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-checkmark-circle"></i>
            <p @click="copy">ios-checkmark-circle</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-checkmark-circle-outline" ></i>
            <p @click="copy">ios-checkmark-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-checkmark-circle"></i>
            <p @click="copy">md-checkmark-circle</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-md-checkmark-circle-outline" ></i>
            <p @click="copy">md-checkmark-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-chrome"></i>
            <p @click="copy">logo-chrome</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-clipboard"></i>
            <p @click="copy">ios-clipboard</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-clipboard-outline"></i>
            <p @click="copy">ios-clipboard-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-clipboard"></i>
            <p @click="copy">md-clipboard</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-clock"></i>
            <p @click="copy">ios-clock</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-clock-outline"></i>
            <p @click="copy">ios-clock-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-clock"></i>
            <p @click="copy">md-clock</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-close"></i>
            <p @click="copy">ios-close</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-close"></i>
            <p @click="copy">md-close</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-close-circle"></i>
            <p @click="copy">ios-close-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-close-circle-outline"></i>
            <p @click="copy">ios-close-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-close-circle"></i>
            <p @click="copy">md-close-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-closed-captioning"></i>
            <p @click="copy">ios-closed-captioning</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-closed-captioning-outline" ></i>
            <p @click="copy">ios-closed-captioning-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-closed-captioning"></i>
            <p @click="copy">md-closed-captioning</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud"></i>
            <p @click="copy">ios-cloud</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud-outline"></i>
            <p @click="copy">ios-cloud-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cloud"></i>
            <p @click="copy">md-cloud</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud-circle"></i>
            <p @click="copy">ios-cloud-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud-circle-outline"></i>
            <p @click="copy">ios-cloud-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cloud-circle"></i>
            <p @click="copy">md-cloud-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud-done"></i>
            <p @click="copy">ios-cloud-done</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud-done-outline"></i>
            <p @click="copy">ios-cloud-done-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cloud-done"></i>
            <p @click="copy">md-cloud-done</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud-download"></i>
            <p @click="copy">ios-cloud-download</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-cloud-download-outline" ></i>
            <p @click="copy">ios-cloud-download-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cloud-download"></i>
            <p @click="copy">md-cloud-download</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cloud-outline"></i>
            <p @click="copy">md-cloud-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud-upload"></i>
            <p @click="copy">ios-cloud-upload</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloud-upload-outline"></i>
            <p @click="copy">ios-cloud-upload-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cloud-upload"></i>
            <p @click="copy">md-cloud-upload</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloudy"></i>
            <p @click="copy">ios-cloudy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloudy-outline"></i>
            <p @click="copy">ios-cloudy-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cloudy"></i>
            <p @click="copy">md-cloudy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloudy-night"></i>
            <p @click="copy">ios-cloudy-night</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cloudy-night-outline"></i>
            <p @click="copy">ios-cloudy-night-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cloudy-night"></i>
            <p @click="copy">md-cloudy-night</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-code"></i>
            <p @click="copy">ios-code</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-code"></i>
            <p @click="copy">md-code</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-code-download"></i>
            <p @click="copy">ios-code-download</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-code-download"></i>
            <p @click="copy">md-code-download</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-code-working"></i>
            <p @click="copy">ios-code-working</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-code-working"></i>
            <p @click="copy">md-code-working</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-codepen"></i>
            <p @click="copy">logo-codepen</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cog"></i>
            <p @click="copy">ios-cog</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cog-outline"></i>
            <p @click="copy">ios-cog-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cog"></i>
            <p @click="copy">md-cog</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-color-fill"></i>
            <p @click="copy">ios-color-fill</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-color-fill-outline"></i>
            <p @click="copy">ios-color-fill-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-color-fill"></i>
            <p @click="copy">md-color-fill</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-color-filter"></i>
            <p @click="copy">ios-color-filter</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-color-filter-outline"></i>
            <p @click="copy">ios-color-filter-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-color-filter"></i>
            <p @click="copy">md-color-filter</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-color-palette"></i>
            <p @click="copy">ios-color-palette</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-color-palette-outline"></i>
            <p @click="copy">ios-color-palette-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-color-palette"></i>
            <p @click="copy">md-color-palette</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-color-wand"></i>
            <p @click="copy">ios-color-wand</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-color-wand-outline"></i>
            <p @click="copy">ios-color-wand-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-color-wand"></i>
            <p @click="copy">md-color-wand</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-compass"></i>
            <p @click="copy">ios-compass</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-compass-outline"></i>
            <p @click="copy">ios-compass-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-compass"></i>
            <p @click="copy">md-compass</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-construct"></i>
            <p @click="copy">ios-construct</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-construct-outline"></i>
            <p @click="copy">ios-construct-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-construct"></i>
            <p @click="copy">md-construct</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-contact"></i>
            <p @click="copy">ios-contact</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-contact-outline"></i>
            <p @click="copy">ios-contact-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-contact"></i>
            <p @click="copy">md-contact</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-contacts"></i>
            <p @click="copy">ios-contacts</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-contacts-outline"></i>
            <p @click="copy">ios-contacts-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-contacts"></i>
            <p @click="copy">md-contacts</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-contract"></i>
            <p @click="copy">ios-contract</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-contract"></i>
            <p @click="copy">md-contract</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-contrast"></i>
            <p @click="copy">ios-contrast</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-contrast"></i>
            <p @click="copy">md-contrast</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-copy"></i>
            <p @click="copy">ios-copy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-copy-outline"></i>
            <p @click="copy">ios-copy-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-copy"></i>
            <p @click="copy">md-copy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-create"></i>
            <p @click="copy">ios-create</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-create-outline"></i>
            <p @click="copy">ios-create-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-create"></i>
            <p @click="copy">md-create</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-crop"></i>
            <p @click="copy">ios-crop</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-crop-outline"></i>
            <p @click="copy">ios-crop-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-crop"></i>
            <p @click="copy">md-crop</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-css3"></i>
            <p @click="copy">logo-css3</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cube"></i>
            <p @click="copy">ios-cube</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cube-outline"></i>
            <p @click="copy">ios-cube-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cube"></i>
            <p @click="copy">md-cube</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cut"></i>
            <p @click="copy">ios-cut</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-cut-outline"></i>
            <p @click="copy">ios-cut-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-cut"></i>
            <p @click="copy">md-cut</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-designernews"></i>
            <p @click="copy">logo-designernews</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-desktop"></i>
            <p @click="copy">ios-desktop</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-desktop-outline"></i>
            <p @click="copy">ios-desktop-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-desktop"></i>
            <p @click="copy">md-desktop</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-disc"></i>
            <p @click="copy">ios-disc</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-disc-outline"></i>
            <p @click="copy">ios-disc-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-disc"></i>
            <p @click="copy">md-disc</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-document"></i>
            <p @click="copy">ios-document</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-document-outline"></i>
            <p @click="copy">ios-document-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-document"></i>
            <p @click="copy">md-document</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-done-all"></i>
            <p @click="copy">ios-done-all</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-done-all"></i>
            <p @click="copy">md-done-all</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-download"></i>
            <p @click="copy">ios-download</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-download-outline"></i>
            <p @click="copy">ios-download-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-download"></i>
            <p @click="copy">md-download</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-dribbble"></i>
            <p @click="copy">logo-dribbble</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-dropbox"></i>
            <p @click="copy">logo-dropbox</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-easel"></i>
            <p @click="copy">ios-easel</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-easel-outline"></i>
            <p @click="copy">ios-easel-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-easel"></i>
            <p @click="copy">md-easel</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-egg"></i>
            <p @click="copy">ios-egg</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-egg-outline"></i>
            <p @click="copy">ios-egg-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-egg"></i>
            <p @click="copy">md-egg</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-euro"></i>
            <p @click="copy">logo-euro</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-exit"></i>
            <p @click="copy">ios-exit</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-exit-outline"></i>
            <p @click="copy">ios-exit-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-exit"></i>
            <p @click="copy">md-exit</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-expand"></i>
            <p @click="copy">ios-expand</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-expand"></i>
            <p @click="copy">md-expand</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-eye"></i>
            <p @click="copy">ios-eye</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-eye-outline"></i>
            <p @click="copy">ios-eye-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-eye"></i>
            <p @click="copy">md-eye</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-eye-off"></i>
            <p @click="copy">ios-eye-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-eye-off-outline"></i>
            <p @click="copy">ios-eye-off-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-eye-off"></i>
            <p @click="copy">md-eye-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-facebook"></i>
            <p @click="copy">logo-facebook</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-fastforward"></i>
            <p @click="copy">ios-fastforward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-fastforward-outline"></i>
            <p @click="copy">ios-fastforward-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-fastforward"></i>
            <p @click="copy">md-fastforward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-female"></i>
            <p @click="copy">ios-female</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-female"></i>
            <p @click="copy">md-female</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-filing"></i>
            <p @click="copy">ios-filing</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-filing-outline"></i>
            <p @click="copy">ios-filing-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-filing"></i>
            <p @click="copy">md-filing</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-film"></i>
            <p @click="copy">ios-film</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-film-outline"></i>
            <p @click="copy">ios-film-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-film"></i>
            <p @click="copy">md-film</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-finger-print"></i>
            <p @click="copy">ios-finger-print</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-finger-print"></i>
            <p @click="copy">md-finger-print</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flag"></i>
            <p @click="copy">ios-flag</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flag-outline"></i>
            <p @click="copy">ios-flag-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-flag"></i>
            <p @click="copy">md-flag</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flame"></i>
            <p @click="copy">ios-flame</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flame-outline"></i>
            <p @click="copy">ios-flame-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-flame"></i>
            <p @click="copy">md-flame</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flash"></i>
            <p @click="copy">ios-flash</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flash-outline"></i>
            <p @click="copy">ios-flash-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-flash"></i>
            <p @click="copy">md-flash</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flask"></i>
            <p @click="copy">ios-flask</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flask-outline"></i>
            <p @click="copy">ios-flask-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-flask"></i>
            <p @click="copy">md-flask</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flower"></i>
            <p @click="copy">ios-flower</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-flower-outline"></i>
            <p @click="copy">ios-flower-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-flower"></i>
            <p @click="copy">md-flower</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-folder"></i>
            <p @click="copy">ios-folder</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-folder-outline"></i>
            <p @click="copy">ios-folder-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-folder"></i>
            <p @click="copy">md-folder</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-folder-open"></i>
            <p @click="copy">ios-folder-open</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-folder-open-outline"></i>
            <p @click="copy">ios-folder-open-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-folder-open"></i>
            <p @click="copy">md-folder-open</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-football"></i>
            <p @click="copy">ios-football</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-football-outline"></i>
            <p @click="copy">ios-football-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-football"></i>
            <p @click="copy">md-football</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-foursquare"></i>
            <p @click="copy">logo-foursquare</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-freebsd-devil"></i>
            <p @click="copy">logo-freebsd-devil</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-funnel"></i>
            <p @click="copy">ios-funnel</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-funnel-outline"></i>
            <p @click="copy">ios-funnel-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-funnel"></i>
            <p @click="copy">md-funnel</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-game-controller-a"></i>
            <p @click="copy">ios-game-controller-a</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-game-controller-a-outline" ></i>
            <p @click="copy">ios-game-controller-a-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-game-controller-a"></i>
            <p @click="copy">md-game-controller-a</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-game-controller-b"></i>
            <p @click="copy">ios-game-controller-b</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-game-controller-b-outline" ></i>
            <p @click="copy">ios-game-controller-b-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-game-controller-b"></i>
            <p @click="copy">md-game-controller-b</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-git-branch"></i>
            <p @click="copy">ios-git-branch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-git-branch"></i>
            <p @click="copy">md-git-branch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-git-commit"></i>
            <p @click="copy">ios-git-commit</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-git-commit"></i>
            <p @click="copy">md-git-commit</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-git-compare"></i>
            <p @click="copy">ios-git-compare</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-git-compare"></i>
            <p @click="copy">md-git-compare</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-git-merge"></i>
            <p @click="copy">ios-git-merge</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-git-merge"></i>
            <p @click="copy">md-git-merge</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-git-network"></i>
            <p @click="copy">ios-git-network</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-git-network"></i>
            <p @click="copy">md-git-network</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-git-pull-request"></i>
            <p @click="copy">ios-git-pull-request</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-git-pull-request"></i>
            <p @click="copy">md-git-pull-request</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-github"></i>
            <p @click="copy">logo-github</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-glasses"></i>
            <p @click="copy">ios-glasses</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-glasses-outline"></i>
            <p @click="copy">ios-glasses-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-glasses"></i>
            <p @click="copy">md-glasses</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-globe"></i>
            <p @click="copy">ios-globe</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-globe-outline"></i>
            <p @click="copy">ios-globe-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-globe"></i>
            <p @click="copy">md-globe</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-google"></i>
            <p @click="copy">logo-google</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-googleplus"></i>
            <p @click="copy">logo-googleplus</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-grid"></i>
            <p @click="copy">ios-grid</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-grid-outline"></i>
            <p @click="copy">ios-grid-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-grid"></i>
            <p @click="copy">md-grid</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-hackernews"></i>
            <p @click="copy">logo-hackernews</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-hammer"></i>
            <p @click="copy">ios-hammer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-hammer-outline"></i>
            <p @click="copy">ios-hammer-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-hammer"></i>
            <p @click="copy">md-hammer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-hand"></i>
            <p @click="copy">ios-hand</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-hand-outline"></i>
            <p @click="copy">ios-hand-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-hand"></i>
            <p @click="copy">md-hand</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-happy"></i>
            <p @click="copy">ios-happy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-happy-outline"></i>
            <p @click="copy">ios-happy-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-happy"></i>
            <p @click="copy">md-happy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-headset"></i>
            <p @click="copy">ios-headset</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-headset-outline"></i>
            <p @click="copy">ios-headset-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-headset"></i>
            <p @click="copy">md-headset</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-heart"></i>
            <p @click="copy">ios-heart</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-heart-outline"></i>
            <p @click="copy">ios-heart-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-heart"></i>
            <p @click="copy">md-heart</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-heart-outline"></i>
            <p @click="copy">md-heart-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-help"></i>
            <p @click="copy">ios-help</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-help"></i>
            <p @click="copy">md-help</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-help-buoy"></i>
            <p @click="copy">ios-help-buoy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-help-buoy-outline"></i>
            <p @click="copy">ios-help-buoy-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-help-buoy"></i>
            <p @click="copy">md-help-buoy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-help-circle"></i>
            <p @click="copy">ios-help-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-help-circle-outline"></i>
            <p @click="copy">ios-help-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-help-circle"></i>
            <p @click="copy">md-help-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-home"></i>
            <p @click="copy">ios-home</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-home-outline"></i>
            <p @click="copy">ios-home-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-home"></i>
            <p @click="copy">md-home</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-html5"></i>
            <p @click="copy">logo-html5</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-ice-cream"></i>
            <p @click="copy">ios-ice-cream</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-ice-cream-outline"></i>
            <p @click="copy">ios-ice-cream-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-ice-cream"></i>
            <p @click="copy">md-ice-cream</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-image"></i>
            <p @click="copy">ios-image</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-image-outline"></i>
            <p @click="copy">ios-image-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-image"></i>
            <p @click="copy">md-image</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-images"></i>
            <p @click="copy">ios-images</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-images-outline"></i>
            <p @click="copy">ios-images-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-images"></i>
            <p @click="copy">md-images</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-infinite"></i>
            <p @click="copy">ios-infinite</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-infinite-outline"></i>
            <p @click="copy">ios-infinite-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-infinite"></i>
            <p @click="copy">md-infinite</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-information"></i>
            <p @click="copy">ios-information</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-information"></i>
            <p @click="copy">md-information</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-information-circle"></i>
            <p @click="copy">ios-information-circle</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-information-circle-outline" ></i>
            <p @click="copy">ios-information-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-information-circle"></i>
            <p @click="copy">md-information-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-instagram"></i>
            <p @click="copy">logo-instagram</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-ionic"></i>
            <p @click="copy">ios-ionic</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-ionic-outline"></i>
            <p @click="copy">ios-ionic-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-ionic"></i>
            <p @click="copy">md-ionic</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-ionitron"></i>
            <p @click="copy">ios-ionitron</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-ionitron-outline"></i>
            <p @click="copy">ios-ionitron-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-ionitron"></i>
            <p @click="copy">md-ionitron</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-javascript"></i>
            <p @click="copy">logo-javascript</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-jet"></i>
            <p @click="copy">ios-jet</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-jet-outline"></i>
            <p @click="copy">ios-jet-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-jet"></i>
            <p @click="copy">md-jet</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-key"></i>
            <p @click="copy">ios-key</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-key-outline"></i>
            <p @click="copy">ios-key-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-key"></i>
            <p @click="copy">md-key</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-keypad"></i>
            <p @click="copy">ios-keypad</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-keypad-outline"></i>
            <p @click="copy">ios-keypad-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-keypad"></i>
            <p @click="copy">md-keypad</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-laptop"></i>
            <p @click="copy">ios-laptop</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-laptop"></i>
            <p @click="copy">md-laptop</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-leaf"></i>
            <p @click="copy">ios-leaf</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-leaf-outline"></i>
            <p @click="copy">ios-leaf-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-leaf"></i>
            <p @click="copy">md-leaf</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-link"></i>
            <p @click="copy">ios-link</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-link-outline"></i>
            <p @click="copy">ios-link-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-link"></i>
            <p @click="copy">md-link</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-linkedin"></i>
            <p @click="copy">logo-linkedin</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-list"></i>
            <p @click="copy">ios-list</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-list"></i>
            <p @click="copy">md-list</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-list-box"></i>
            <p @click="copy">ios-list-box</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-list-box-outline"></i>
            <p @click="copy">ios-list-box-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-list-box"></i>
            <p @click="copy">md-list-box</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-locate"></i>
            <p @click="copy">ios-locate</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-locate-outline"></i>
            <p @click="copy">ios-locate-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-locate"></i>
            <p @click="copy">md-locate</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-lock"></i>
            <p @click="copy">ios-lock</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-lock-outline"></i>
            <p @click="copy">ios-lock-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-lock"></i>
            <p @click="copy">md-lock</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-log-in"></i>
            <p @click="copy">ios-log-in</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-log-in"></i>
            <p @click="copy">md-log-in</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-log-out"></i>
            <p @click="copy">ios-log-out</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-log-out"></i>
            <p @click="copy">md-log-out</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-magnet"></i>
            <p @click="copy">ios-magnet</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-magnet-outline"></i>
            <p @click="copy">ios-magnet-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-magnet"></i>
            <p @click="copy">md-magnet</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-mail"></i>
            <p @click="copy">ios-mail</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-mail-outline"></i>
            <p @click="copy">ios-mail-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-mail"></i>
            <p @click="copy">md-mail</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-mail-open"></i>
            <p @click="copy">ios-mail-open</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-mail-open-outline"></i>
            <p @click="copy">ios-mail-open-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-mail-open"></i>
            <p @click="copy">md-mail-open</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-male"></i>
            <p @click="copy">ios-male</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-male"></i>
            <p @click="copy">md-male</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-man"></i>
            <p @click="copy">ios-man</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-man-outline"></i>
            <p @click="copy">ios-man-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-man"></i>
            <p @click="copy">md-man</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-map"></i>
            <p @click="copy">ios-map</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-map-outline"></i>
            <p @click="copy">ios-map-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-map"></i>
            <p @click="copy">md-map</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-markdown"></i>
            <p @click="copy">logo-markdown</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-medal"></i>
            <p @click="copy">ios-medal</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-medal-outline"></i>
            <p @click="copy">ios-medal-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-medal"></i>
            <p @click="copy">md-medal</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-medical"></i>
            <p @click="copy">ios-medical</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-medical-outline"></i>
            <p @click="copy">ios-medical-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-medical"></i>
            <p @click="copy">md-medical</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-medkit"></i>
            <p @click="copy">ios-medkit</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-medkit-outline"></i>
            <p @click="copy">ios-medkit-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-medkit"></i>
            <p @click="copy">md-medkit</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-megaphone"></i>
            <p @click="copy">ios-megaphone</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-megaphone-outline"></i>
            <p @click="copy">ios-megaphone-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-megaphone"></i>
            <p @click="copy">md-megaphone</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-menu"></i>
            <p @click="copy">ios-menu</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-menu-outline"></i>
            <p @click="copy">ios-menu-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-menu"></i>
            <p @click="copy">md-menu</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-mic"></i>
            <p @click="copy">ios-mic</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-mic-outline"></i>
            <p @click="copy">ios-mic-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-mic"></i>
            <p @click="copy">md-mic</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-mic-off"></i>
            <p @click="copy">ios-mic-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-mic-off-outline"></i>
            <p @click="copy">ios-mic-off-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-mic-off"></i>
            <p @click="copy">md-mic-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-microphone"></i>
            <p @click="copy">ios-microphone</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-microphone-outline"></i>
            <p @click="copy">ios-microphone-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-microphone"></i>
            <p @click="copy">md-microphone</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-moon"></i>
            <p @click="copy">ios-moon</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-moon-outline"></i>
            <p @click="copy">ios-moon-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-moon"></i>
            <p @click="copy">md-moon</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-more"></i>
            <p @click="copy">ios-more</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-more-outline"></i>
            <p @click="copy">ios-more-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-more"></i>
            <p @click="copy">md-more</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-move"></i>
            <p @click="copy">ios-move</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-move"></i>
            <p @click="copy">md-move</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-musical-note"></i>
            <p @click="copy">ios-musical-note</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-musical-note-outline"></i>
            <p @click="copy">ios-musical-note-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-musical-note"></i>
            <p @click="copy">md-musical-note</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-musical-notes"></i>
            <p @click="copy">ios-musical-notes</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-musical-notes-outline"></i>
            <p @click="copy">ios-musical-notes-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-musical-notes"></i>
            <p @click="copy">md-musical-notes</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-navigate"></i>
            <p @click="copy">ios-navigate</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-navigate-outline"></i>
            <p @click="copy">ios-navigate-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-navigate"></i>
            <p @click="copy">md-navigate</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-no-smoking"></i>
            <p @click="copy">ios-no-smoking</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-no-smoking-outline"></i>
            <p @click="copy">ios-no-smoking-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-no-smoking"></i>
            <p @click="copy">md-no-smoking</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-nodejs"></i>
            <p @click="copy">logo-nodejs</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-notifications"></i>
            <p @click="copy">ios-notifications</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-notifications-outline"></i>
            <p @click="copy">ios-notifications-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-notifications"></i>
            <p @click="copy">md-notifications</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-notifications-off"></i>
            <p @click="copy">ios-notifications-off</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-notifications-off-outline" ></i>
            <p @click="copy">ios-notifications-off-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-notifications-off"></i>
            <p @click="copy">md-notifications-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-notifications-outline"></i>
            <p @click="copy">md-notifications-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-nuclear"></i>
            <p @click="copy">ios-nuclear</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-nuclear-outline"></i>
            <p @click="copy">ios-nuclear-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-nuclear"></i>
            <p @click="copy">md-nuclear</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-nutrition"></i>
            <p @click="copy">ios-nutrition</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-nutrition-outline"></i>
            <p @click="copy">ios-nutrition-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-nutrition"></i>
            <p @click="copy">md-nutrition</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-octocat"></i>
            <p @click="copy">logo-octocat</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-open"></i>
            <p @click="copy">ios-open</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-open-outline"></i>
            <p @click="copy">ios-open-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-open"></i>
            <p @click="copy">md-open</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-options"></i>
            <p @click="copy">ios-options</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-options-outline"></i>
            <p @click="copy">ios-options-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-options"></i>
            <p @click="copy">md-options</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-outlet"></i>
            <p @click="copy">ios-outlet</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-outlet-outline"></i>
            <p @click="copy">ios-outlet-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-outlet"></i>
            <p @click="copy">md-outlet</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-paper"></i>
            <p @click="copy">ios-paper</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-paper-outline"></i>
            <p @click="copy">ios-paper-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-paper"></i>
            <p @click="copy">md-paper</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-paper-plane"></i>
            <p @click="copy">ios-paper-plane</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-paper-plane-outline"></i>
            <p @click="copy">ios-paper-plane-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-paper-plane"></i>
            <p @click="copy">md-paper-plane</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-partly-sunny"></i>
            <p @click="copy">ios-partly-sunny</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-partly-sunny-outline"></i>
            <p @click="copy">ios-partly-sunny-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-partly-sunny"></i>
            <p @click="copy">md-partly-sunny</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pause"></i>
            <p @click="copy">ios-pause</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pause-outline"></i>
            <p @click="copy">ios-pause-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-pause"></i>
            <p @click="copy">md-pause</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-paw"></i>
            <p @click="copy">ios-paw</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-paw-outline"></i>
            <p @click="copy">ios-paw-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-paw"></i>
            <p @click="copy">md-paw</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-people"></i>
            <p @click="copy">ios-people</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-people-outline"></i>
            <p @click="copy">ios-people-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-people"></i>
            <p @click="copy">md-people</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-person"></i>
            <p @click="copy">ios-person</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-person-outline"></i>
            <p @click="copy">ios-person-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-person"></i>
            <p @click="copy">md-person</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-person-add"></i>
            <p @click="copy">ios-person-add</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-person-add-outline"></i>
            <p @click="copy">ios-person-add-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-person-add"></i>
            <p @click="copy">md-person-add</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-phone-landscape"></i>
            <p @click="copy">ios-phone-landscape</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-phone-landscape"></i>
            <p @click="copy">md-phone-landscape</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-phone-portrait"></i>
            <p @click="copy">ios-phone-portrait</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-phone-portrait"></i>
            <p @click="copy">md-phone-portrait</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-photos"></i>
            <p @click="copy">ios-photos</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-photos-outline"></i>
            <p @click="copy">ios-photos-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-photos"></i>
            <p @click="copy">md-photos</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pie"></i>
            <p @click="copy">ios-pie</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pie-outline"></i>
            <p @click="copy">ios-pie-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-pie"></i>
            <p @click="copy">md-pie</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pin"></i>
            <p @click="copy">ios-pin</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pin-outline"></i>
            <p @click="copy">ios-pin-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-pin"></i>
            <p @click="copy">md-pin</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pint"></i>
            <p @click="copy">ios-pint</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pint-outline"></i>
            <p @click="copy">ios-pint-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-pint"></i>
            <p @click="copy">md-pint</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-pinterest"></i>
            <p @click="copy">logo-pinterest</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pizza"></i>
            <p @click="copy">ios-pizza</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pizza-outline"></i>
            <p @click="copy">ios-pizza-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-pizza"></i>
            <p @click="copy">md-pizza</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-plane"></i>
            <p @click="copy">ios-plane</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-plane-outline"></i>
            <p @click="copy">ios-plane-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-plane"></i>
            <p @click="copy">md-plane</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-planet"></i>
            <p @click="copy">ios-planet</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-planet-outline"></i>
            <p @click="copy">ios-planet-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-planet"></i>
            <p @click="copy">md-planet</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-play"></i>
            <p @click="copy">ios-play</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-play-outline"></i>
            <p @click="copy">ios-play-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-play"></i>
            <p @click="copy">md-play</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-playstation"></i>
            <p @click="copy">logo-playstation</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-podium"></i>
            <p @click="copy">ios-podium</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-podium-outline"></i>
            <p @click="copy">ios-podium-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-podium"></i>
            <p @click="copy">md-podium</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-power"></i>
            <p @click="copy">ios-power</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-power-outline"></i>
            <p @click="copy">ios-power-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-power"></i>
            <p @click="copy">md-power</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pricetag"></i>
            <p @click="copy">ios-pricetag</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pricetag-outline"></i>
            <p @click="copy">ios-pricetag-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-pricetag"></i>
            <p @click="copy">md-pricetag</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pricetags"></i>
            <p @click="copy">ios-pricetags</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pricetags-outline"></i>
            <p @click="copy">ios-pricetags-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-pricetags"></i>
            <p @click="copy">md-pricetags</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-print"></i>
            <p @click="copy">ios-print</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-print-outline"></i>
            <p @click="copy">ios-print-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-print"></i>
            <p @click="copy">md-print</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pulse"></i>
            <p @click="copy">ios-pulse</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-pulse-outline"></i>
            <p @click="copy">ios-pulse-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-pulse"></i>
            <p @click="copy">md-pulse</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-python"></i>
            <p @click="copy">logo-python</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-qr-scanner"></i>
            <p @click="copy">ios-qr-scanner</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-qr-scanner"></i>
            <p @click="copy">md-qr-scanner</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-quote"></i>
            <p @click="copy">ios-quote</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-quote-outline"></i>
            <p @click="copy">ios-quote-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-quote"></i>
            <p @click="copy">md-quote</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-radio"></i>
            <p @click="copy">ios-radio</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-radio-outline"></i>
            <p @click="copy">ios-radio-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-radio"></i>
            <p @click="copy">md-radio</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-radio-button-off"></i>
            <p @click="copy">ios-radio-button-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-radio-button-off"></i>
            <p @click="copy">md-radio-button-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-radio-button-on"></i>
            <p @click="copy">ios-radio-button-on</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-radio-button-on"></i>
            <p @click="copy">md-radio-button-on</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-rainy"></i>
            <p @click="copy">ios-rainy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-rainy-outline"></i>
            <p @click="copy">ios-rainy-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-rainy"></i>
            <p @click="copy">md-rainy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-recording"></i>
            <p @click="copy">ios-recording</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-recording-outline"></i>
            <p @click="copy">ios-recording-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-recording"></i>
            <p @click="copy">md-recording</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-reddit"></i>
            <p @click="copy">logo-reddit</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-redo"></i>
            <p @click="copy">ios-redo</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-redo-outline"></i>
            <p @click="copy">ios-redo-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-redo"></i>
            <p @click="copy">md-redo</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-refresh"></i>
            <p @click="copy">ios-refresh</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-refresh"></i>
            <p @click="copy">md-refresh</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-refresh-circle"></i>
            <p @click="copy">ios-refresh-circle</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-refresh-circle-outline" ></i>
            <p @click="copy">ios-refresh-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-refresh-circle"></i>
            <p @click="copy">md-refresh-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-remove"></i>
            <p @click="copy">ios-remove</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-remove"></i>
            <p @click="copy">md-remove</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-remove-circle"></i>
            <p @click="copy">ios-remove-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-remove-circle-outline"></i>
            <p @click="copy">ios-remove-circle-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-remove-circle"></i>
            <p @click="copy">md-remove-circle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-reorder"></i>
            <p @click="copy">ios-reorder</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-reorder"></i>
            <p @click="copy">md-reorder</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-repeat"></i>
            <p @click="copy">ios-repeat</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-repeat"></i>
            <p @click="copy">md-repeat</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-resize"></i>
            <p @click="copy">ios-resize</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-resize"></i>
            <p @click="copy">md-resize</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-restaurant"></i>
            <p @click="copy">ios-restaurant</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-restaurant-outline"></i>
            <p @click="copy">ios-restaurant-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-restaurant"></i>
            <p @click="copy">md-restaurant</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-return-left"></i>
            <p @click="copy">ios-return-left</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-return-left"></i>
            <p @click="copy">md-return-left</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-return-right"></i>
            <p @click="copy">ios-return-right</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-return-right"></i>
            <p @click="copy">md-return-right</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-reverse-camera"></i>
            <p @click="copy">ios-reverse-camera</p>
        </div>
        <div class="icons-item"><i
                class="x-icon x-icon-ios-reverse-camera-outline" ></i>
            <p @click="copy">ios-reverse-camera-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-reverse-camera"></i>
            <p @click="copy">md-reverse-camera</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-rewind"></i>
            <p @click="copy">ios-rewind</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-rewind-outline"></i>
            <p @click="copy">ios-rewind-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-rewind"></i>
            <p @click="copy">md-rewind</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-ribbon"></i>
            <p @click="copy">ios-ribbon</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-ribbon-outline"></i>
            <p @click="copy">ios-ribbon-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-ribbon"></i>
            <p @click="copy">md-ribbon</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-rose"></i>
            <p @click="copy">ios-rose</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-rose-outline"></i>
            <p @click="copy">ios-rose-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-rose"></i>
            <p @click="copy">md-rose</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-rss"></i>
            <p @click="copy">logo-rss</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-sad"></i>
            <p @click="copy">ios-sad</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-sad-outline"></i>
            <p @click="copy">ios-sad-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-sad"></i>
            <p @click="copy">md-sad</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-sass"></i>
            <p @click="copy">logo-sass</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-school"></i>
            <p @click="copy">ios-school</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-school-outline"></i>
            <p @click="copy">ios-school-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-school"></i>
            <p @click="copy">md-school</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-search"></i>
            <p @click="copy">ios-search</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-search-outline"></i>
            <p @click="copy">ios-search-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-search"></i>
            <p @click="copy">md-search</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-send"></i>
            <p @click="copy">ios-send</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-send-outline"></i>
            <p @click="copy">ios-send-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-send"></i>
            <p @click="copy">md-send</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-settings"></i>
            <p @click="copy">ios-settings</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-settings-outline"></i>
            <p @click="copy">ios-settings-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-settings"></i>
            <p @click="copy">md-settings</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-share"></i>
            <p @click="copy">ios-share</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-share-outline"></i>
            <p @click="copy">ios-share-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-share"></i>
            <p @click="copy">md-share</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-share-alt"></i>
            <p @click="copy">ios-share-alt</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-share-alt-outline"></i>
            <p @click="copy">ios-share-alt-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-share-alt"></i>
            <p @click="copy">md-share-alt</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-shirt"></i>
            <p @click="copy">ios-shirt</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-shirt-outline"></i>
            <p @click="copy">ios-shirt-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-shirt"></i>
            <p @click="copy">md-shirt</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-shuffle"></i>
            <p @click="copy">ios-shuffle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-shuffle"></i>
            <p @click="copy">md-shuffle</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-skip-backward"></i>
            <p @click="copy">ios-skip-backward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-skip-backward-outline"></i>
            <p @click="copy">ios-skip-backward-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-skip-backward"></i>
            <p @click="copy">md-skip-backward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-skip-forward"></i>
            <p @click="copy">ios-skip-forward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-skip-forward-outline"></i>
            <p @click="copy">ios-skip-forward-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-skip-forward"></i>
            <p @click="copy">md-skip-forward</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-skype"></i>
            <p @click="copy">logo-skype</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-snapchat"></i>
            <p @click="copy">logo-snapchat</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-snow"></i>
            <p @click="copy">ios-snow</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-snow-outline"></i>
            <p @click="copy">ios-snow-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-snow"></i>
            <p @click="copy">md-snow</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-speedometer"></i>
            <p @click="copy">ios-speedometer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-speedometer-outline"></i>
            <p @click="copy">ios-speedometer-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-speedometer"></i>
            <p @click="copy">md-speedometer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-square"></i>
            <p @click="copy">ios-square</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-square-outline"></i>
            <p @click="copy">ios-square-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-square"></i>
            <p @click="copy">md-square</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-square-outline"></i>
            <p @click="copy">md-square-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-star"></i>
            <p @click="copy">ios-star</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-star-outline"></i>
            <p @click="copy">ios-star-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-star"></i>
            <p @click="copy">md-star</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-star-half"></i>
            <p @click="copy">ios-star-half</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-star-half"></i>
            <p @click="copy">md-star-half</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-star-outline"></i>
            <p @click="copy">md-star-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-stats"></i>
            <p @click="copy">ios-stats</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-stats-outline"></i>
            <p @click="copy">ios-stats-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-stats"></i>
            <p @click="copy">md-stats</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-steam"></i>
            <p @click="copy">logo-steam</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-stopwatch"></i>
            <p @click="copy">ios-stopwatch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-stopwatch-outline"></i>
            <p @click="copy">ios-stopwatch-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-stopwatch"></i>
            <p @click="copy">md-stopwatch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-subway"></i>
            <p @click="copy">ios-subway</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-subway-outline"></i>
            <p @click="copy">ios-subway-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-subway"></i>
            <p @click="copy">md-subway</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-sunny"></i>
            <p @click="copy">ios-sunny</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-sunny-outline"></i>
            <p @click="copy">ios-sunny-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-sunny"></i>
            <p @click="copy">md-sunny</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-swap"></i>
            <p @click="copy">ios-swap</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-swap"></i>
            <p @click="copy">md-swap</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-switch"></i>
            <p @click="copy">ios-switch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-switch-outline"></i>
            <p @click="copy">ios-switch-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-switch"></i>
            <p @click="copy">md-switch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-sync"></i>
            <p @click="copy">ios-sync</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-sync"></i>
            <p @click="copy">md-sync</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-tablet-landscape"></i>
            <p @click="copy">ios-tablet-landscape</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-tablet-landscape"></i>
            <p @click="copy">md-tablet-landscape</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-tablet-portrait"></i>
            <p @click="copy">ios-tablet-portrait</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-tablet-portrait"></i>
            <p @click="copy">md-tablet-portrait</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-tennisball"></i>
            <p @click="copy">ios-tennisball</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-tennisball-outline"></i>
            <p @click="copy">ios-tennisball-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-tennisball"></i>
            <p @click="copy">md-tennisball</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-text"></i>
            <p @click="copy">ios-text</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-text-outline"></i>
            <p @click="copy">ios-text-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-text"></i>
            <p @click="copy">md-text</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-thermometer"></i>
            <p @click="copy">ios-thermometer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-thermometer-outline"></i>
            <p @click="copy">ios-thermometer-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-thermometer"></i>
            <p @click="copy">md-thermometer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-thumbs-down"></i>
            <p @click="copy">ios-thumbs-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-thumbs-down-outline"></i>
            <p @click="copy">ios-thumbs-down-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-thumbs-down"></i>
            <p @click="copy">md-thumbs-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-thumbs-up"></i>
            <p @click="copy">ios-thumbs-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-thumbs-up-outline"></i>
            <p @click="copy">ios-thumbs-up-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-thumbs-up"></i>
            <p @click="copy">md-thumbs-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-thunderstorm"></i>
            <p @click="copy">ios-thunderstorm</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-thunderstorm-outline"></i>
            <p @click="copy">ios-thunderstorm-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-thunderstorm"></i>
            <p @click="copy">md-thunderstorm</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-time"></i>
            <p @click="copy">ios-time</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-time-outline"></i>
            <p @click="copy">ios-time-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-time"></i>
            <p @click="copy">md-time</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-timer"></i>
            <p @click="copy">ios-timer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-timer-outline"></i>
            <p @click="copy">ios-timer-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-timer"></i>
            <p @click="copy">md-timer</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-train"></i>
            <p @click="copy">ios-train</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-train-outline"></i>
            <p @click="copy">ios-train-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-train"></i>
            <p @click="copy">md-train</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-transgender"></i>
            <p @click="copy">ios-transgender</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-transgender"></i>
            <p @click="copy">md-transgender</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-trash"></i>
            <p @click="copy">ios-trash</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-trash-outline"></i>
            <p @click="copy">ios-trash-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-trash"></i>
            <p @click="copy">md-trash</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-trending-down"></i>
            <p @click="copy">ios-trending-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-trending-down"></i>
            <p @click="copy">md-trending-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-trending-up"></i>
            <p @click="copy">ios-trending-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-trending-up"></i>
            <p @click="copy">md-trending-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-trophy"></i>
            <p @click="copy">ios-trophy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-trophy-outline"></i>
            <p @click="copy">ios-trophy-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-trophy"></i>
            <p @click="copy">md-trophy</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-tumblr"></i>
            <p @click="copy">logo-tumblr</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-tux"></i>
            <p @click="copy">logo-tux</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-twitch"></i>
            <p @click="copy">logo-twitch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-twitter"></i>
            <p @click="copy">logo-twitter</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-umbrella"></i>
            <p @click="copy">ios-umbrella</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-umbrella-outline"></i>
            <p @click="copy">ios-umbrella-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-umbrella"></i>
            <p @click="copy">md-umbrella</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-undo"></i>
            <p @click="copy">ios-undo</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-undo-outline"></i>
            <p @click="copy">ios-undo-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-undo"></i>
            <p @click="copy">md-undo</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-unlock"></i>
            <p @click="copy">ios-unlock</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-unlock-outline"></i>
            <p @click="copy">ios-unlock-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-unlock"></i>
            <p @click="copy">md-unlock</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-usd"></i>
            <p @click="copy">logo-usd</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-videocam"></i>
            <p @click="copy">ios-videocam</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-videocam-outline"></i>
            <p @click="copy">ios-videocam-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-videocam"></i>
            <p @click="copy">md-videocam</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-vimeo"></i>
            <p @click="copy">logo-vimeo</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-volume-down"></i>
            <p @click="copy">ios-volume-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-volume-down"></i>
            <p @click="copy">md-volume-down</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-volume-mute"></i>
            <p @click="copy">ios-volume-mute</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-volume-mute"></i>
            <p @click="copy">md-volume-mute</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-volume-off"></i>
            <p @click="copy">ios-volume-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-volume-off"></i>
            <p @click="copy">md-volume-off</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-volume-up"></i>
            <p @click="copy">ios-volume-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-volume-up"></i>
            <p @click="copy">md-volume-up</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-walk"></i>
            <p @click="copy">ios-walk</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-walk"></i>
            <p @click="copy">md-walk</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-warning"></i>
            <p @click="copy">ios-warning</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-warning-outline"></i>
            <p @click="copy">ios-warning-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-warning"></i>
            <p @click="copy">md-warning</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-watch"></i>
            <p @click="copy">ios-watch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-watch"></i>
            <p @click="copy">md-watch</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-water"></i>
            <p @click="copy">ios-water</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-water-outline"></i>
            <p @click="copy">ios-water-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-water"></i>
            <p @click="copy">md-water</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-whatsapp"></i>
            <p @click="copy">logo-whatsapp</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-wifi"></i>
            <p @click="copy">ios-wifi</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-wifi-outline"></i>
            <p @click="copy">ios-wifi-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-wifi"></i>
            <p @click="copy">md-wifi</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-windows"></i>
            <p @click="copy">logo-windows</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-wine"></i>
            <p @click="copy">ios-wine</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-wine-outline"></i>
            <p @click="copy">ios-wine-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-wine"></i>
            <p @click="copy">md-wine</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-woman"></i>
            <p @click="copy">ios-woman</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-woman-outline"></i>
            <p @click="copy">ios-woman-outline</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-md-woman"></i>
            <p @click="copy">md-woman</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-wordpress"></i>
            <p @click="copy">logo-wordpress</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-xbox"></i>
            <p @click="copy">logo-xbox</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-yahoo"></i>
            <p @click="copy">logo-yahoo</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-yen"></i>
            <p @click="copy">logo-yen</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-logo-youtube"></i>
            <p @click="copy">logo-youtube</p>
        </div>
        <div class="icons-item"><i class="x-icon x-icon-ios-loading"></i>
            <p @click="copy">ios-loading</p>
        </div>

        <!-- <p ref="textarea" id="biao1"  > {{text}}</p> -->

        <input v-model="text" ref="textarea" placeholder="edit me">
    </div>
</template>
<script>
export default {
  name: 'x-icon',
  data () {
    return {
      msg: 'Welcome to Your x-icon ',
      text:'',
      num: 1
    }
  },
  methods:{
    copy (e) {
      console.log(e.target.innerText);
      this.text = `<x-icon type="${e.target.innerText}" size="big"/>`
      this.$refs.textarea.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      if (++this.num > 2) {
        this.num = 1
        this.$Message.info(`已复制好，可贴粘。`)
      }
      setTimeout(()=>{
        this.num = 1
      },500)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.icons{
    input {
        opacity: 0;
        height: 0;
        position: absolute;
        top: -10000;
        left: 0;
    }
    .icons-item{
        float: left;
        // margin: .1rem 0 0;
        width: 25%;
        text-align: center;
        list-style: none;
        cursor: pointer;
        height: .6rem;
        color: #5c6b77;
        transition: all .2s ease;
        position: relative;
        padding-top: 10px;
        font-size: .20rem;

    }
    p{
        font-size: .1rem;
        margin-top: .05rem;
        color: #5c6b77;
        height: .42rem;
        &:hover{
            
            color: #09f
        }
    }
}
</style>