//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 119                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.jsbc_compression_level", 3);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dns.max_high_priority_threads", 8);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("dom.security.sanitizer.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);

/** PASSWORDS ***/
user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** ADDRESS + CREDIT CARD MANAGER ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("security.mixed_content.upgrade_display_content.image", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** WEBRTC ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);
user_pref("cookiebanners.service.enableGlobalRules", true);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/*** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

// PREF: restore login manager
user_pref("signon.rememberSignons", true);

// PREF: restore address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", true);
user_pref("extensions.formautofill.creditCards.enabled", true);
// PREF: allow websites to ask you for your location
user_pref("permissions.default.geo", 0);
// PREF: allow websites to ask you to receive site notifications
user_pref("permissions.default.desktop-notification", 0);
// PREF: restore Top Sites on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true); // Shortcuts
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // clear default topsites

// PREF: remove sponsored content on New Tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts 
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories
// PREF: remove search engine suggestions
user_pref("browser.search.suggest.enabled", false);
// PREF: enable container tabs
user_pref("privacy.userContext.enabled", true);
// PREF: enable GPU-accelerated Canvas2D [WINDOWS]
user_pref("gfx.canvas.accelerated", true);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", 1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting", 1.0);
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/

/******
*    name: arkenfox user.js
*    date: 20 November 2023
* version: 119
*    urls: https://github.com/arkenfox/user.js [repo]
*        : https://arkenfox.github.io/gui/ [interactive]
* license: MIT: https://github.com/arkenfox/user.js/blob/master/LICENSE.txt

* README:

  1. Consider using Tor Browser if it meets your needs or fits your threat model
       * https://2019.www.torproject.org/about/torusers.html
  2. Read the entire wiki
       * https://github.com/arkenfox/user.js/wiki
  3. If you skipped step 2, return to step 2
  4. Make changes in a user-overrides.js
       * There are often trade-offs and conflicts between security vs privacy vs anti-tracking
         and these need to be balanced against functionality & convenience & breakage
       * Some site breakage and unintended consequences will happen. Everyone's experience will differ
         e.g. some user data is erased on exit (section 2800), change this to suit your needs
       * While not 100% definitive, search for "[SETUP" tags
  5. Some tag info
       [SETUP-SECURITY] it's one item, read it
            [SETUP-WEB] can cause some websites to break
         [SETUP-CHROME] changes how Firefox itself behaves (i.e. not directly website related)
  6. Override Recipes: https://github.com/arkenfox/user.js/issues/1080

* RELEASES: https://github.com/arkenfox/user.js/releases

  * Use the arkenfox release that matches your Firefox version
    - DON'T wait for arkenfox to update Firefox, nothing major changes these days
  * Each release
    - run prefsCleaner to reset prefs made inactive, including deprecated (9999)
  * ESR
    - It is recommended to not use the updater, or you will get a later version which may cause issues.
      So you should manually append your overrides (and keep a copy), and manually update when you
      change ESR releases (arkenfox is already past that release)
    - If you decide to keep updating, then the onus is on - also see section 9999

* INDEX:

  0100: STARTUP
  0200: GEOLOCATION
  0300: QUIETER FOX
  0400: SAFE BROWSING
  0600: BLOCK IMPLICIT OUTBOUND
  0700: DNS / DoH / PROXY / SOCKS
  0800: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
  0900: PASSWORDS
  1000: DISK AVOIDANCE
  1200: HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
  1600: REFERERS
  1700: CONTAINERS
  2000: PLUGINS / MEDIA / WEBRTC
  2400: DOM (DOCUMENT OBJECT MODEL)
  2600: MISCELLANEOUS
  2700: ETP (ENHANCED TRACKING PROTECTION)
  2800: SHUTDOWN & SANITIZING
  4500: RFP (resistFingerprinting)
  5000: OPTIONAL OPSEC
  5500: OPTIONAL HARDENING
  6000: DON'T TOUCH
  7000: DON'T BOTHER
  8000: DON'T BOTHER: FINGERPRINTING
  9000: NON-PROJECT RELATED
  9999: DEPRECATED / RENAMED

******/

/* START: internal custom pref to test for syntax errors
 * [NOTE] Not all syntax errors cause parsing to abort i.e. reaching the last debug pref
 * no longer necessarily means that all prefs have been applied. Check the console right
 * after startup for any warnings/error messages related to non-applied prefs
 * [1] https://blog.mozilla.org/nnethercote/2018/03/09/a-new-preferences-parser-for-firefox/ ***/
user_pref("_user.js.parrot", "START: Oh yes, the Norwegian Blue... what's wrong with it?");

/* 0000: disable about:config warning ***/
user_pref("browser.aboutConfig.showWarning", false);

/*** [SECTION 0100]: STARTUP ***/
user_pref("_user.js.parrot", "0100 syntax error: the parrot's dead!");
/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared with history (2811), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 0);
/* 0103: set HOME+NEWWINDOW page
 * about:home=Firefox Home (default, see 0105), custom URL, about:blank
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows ***/
user_pref("browser.startup.homepage", "about:blank");
/* 0104: set NEWTAB page
 * true=Firefox Home (default, see 0105), false=blank page
 * [SETTING] Home>New Windows and Tabs>New tabs ***/
user_pref("browser.newtabpage.enabled", false);
/* 0105: disable sponsored content on Firefox Home (Activity Stream)
 * [SETTING] Home>Firefox Home Content ***/
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+] Pocket > Sponsored Stories
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] Sponsored shortcuts
/* 0106: clear default topsites
 * [NOTE] This does not block you from adding your own ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");

/*** [SECTION 0200]: GEOLOCATION ***/
user_pref("_user.js.parrot", "0200 syntax error: the parrot's definitely deceased!");
/* 0201: use Mozilla geolocation service instead of Google if permission is granted [FF74+]
 * Optionally enable logging to the console (defaults to false) ***/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
   // user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
/* 0202: disable using the OS's geolocation service ***/
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX] [HIDDEN PREF]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

/*** [SECTION 0300]: QUIETER FOX ***/
user_pref("_user.js.parrot", "0300 syntax error: the parrot's not pinin' for the fjords!");
/** RECOMMENDATIONS ***/
/* 0320: disable recommendation pane in about:addons (uses Google Analytics) ***/
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
/* 0321: disable recommendations in about:addons' Extensions and Themes panes [FF68+] ***/
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
/* 0322: disable personalized Extension Recommendations in about:addons and AMO [FF65+]
 * [NOTE] This pref has no effect when Health Reports (0331) are disabled
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
 * [1] https://support.mozilla.org/kb/personalized-extension-recommendations ***/
user_pref("browser.discovery.enabled", false);
/* 0323: disable shopping experience [FF116+]
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1840156#c0 ***/
user_pref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false]

/** TELEMETRY ***/
/* 0330: disable new data submission [FF41+]
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0331: disable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical... data ***/
user_pref("datareporting.healthreport.uploadEnabled", false);
/* 0332: disable telemetry
 * The "unified" pref affects the behavior of the "enabled" pref
 * - If "unified" is false then "enabled" controls the telemetry module
 * - If "unified" is true then "enabled" only controls whether to record extended data
 * [NOTE] "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease (true) or release builds (false) [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
/* 0333: disable Telemetry Coverage
 * [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/ ***/
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
/* 0334: disable PingCentre telemetry (used in several System Add-ons) [FF57+]
 * Defense-in-depth: currently covered by 0331 ***/
user_pref("browser.ping-centre.telemetry", false);
/* 0335: disable Firefox Home (Activity Stream) telemetry ***/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** STUDIES ***/
/* 0340: disable Studies
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies ***/
user_pref("app.shield.optoutstudies.enabled", false);
/* 0341: disable Normandy/Shield [FF60+]
 * Shield is a telemetry system that can push and test "recipes"
 * [1] https://mozilla.github.io/normandy/ ***/
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
/* 0350: disable Crash Reports ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
   // user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
/* 0351: enforce no submission of backlogged Crash Reports [FF58+]
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports  ***/
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]

/** OTHER ***/
/* 0360: disable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
/* 0361: disable Network Connectivity checks [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 ***/
user_pref("network.connectivity-service.enabled", false);

/*** [SECTION 0400]: SAFE BROWSING (SB)
   SB has taken many steps to preserve privacy. If required, a full url is never sent
   to Google, only a part-hash of the prefix, hidden with noise of other real part-hashes.
   Firefox takes measures such as stripping out identifying parameters and since SBv4 (FF57+)
   doesn't even use cookies. (#Turn on browser.safebrowsing.debug to monitor this activity)

   [1] https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
   [2] https://wiki.mozilla.org/Security/Safe_Browsing
   [3] https://support.mozilla.org/kb/how-does-phishing-and-malware-protection-work
   [4] https://educatedguesswork.org/posts/safe-browsing-privacy/
***/
user_pref("_user.js.parrot", "0400 syntax error: the parrot's passed on!");
/* 0401: disable SB (Safe Browsing)
 * [WARNING] Do this at your own risk! These are the master switches
 * [SETTING] Privacy & Security>Security>... Block dangerous and deceptive content ***/
   // user_pref("browser.safebrowsing.malware.enabled", false);
   // user_pref("browser.safebrowsing.phishing.enabled", false);
/* 0402: disable SB checks for downloads (both local lookups + remote)
 * This is the master switch for the safebrowsing.downloads* prefs (0403, 0404)
 * [SETTING] Privacy & Security>Security>... "Block dangerous downloads" ***/
   // user_pref("browser.safebrowsing.downloads.enabled", false);
/* 0403: disable SB checks for downloads (remote)
 * To verify the safety of certain executable files, Firefox may submit some information about the
 * file, including the name, origin, size and a cryptographic hash of the contents, to the Google
 * Safe Browsing service which helps Firefox determine whether or not the file should be blocked
 * [SETUP-SECURITY] If you do not understand this, or you want this protection, then override this ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
   // user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
/* 0404: disable SB checks for unwanted software
 * [SETTING] Privacy & Security>Security>... "Warn you about unwanted and uncommon software" ***/
   // user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
   // user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
/* 0405: disable "ignore this warning" on SB warnings [FF45+]
 * If clicked, it bypasses the block for that session. This is a means for admins to enforce SB
 * [TEST] see https://github.com/arkenfox/user.js/wiki/Appendix-A-Test-Sites#-mozilla
 * [1] https://bugzilla.mozilla.org/1226490 ***/
   // user_pref("browser.safebrowsing.allowOverride", false);

/*** [SECTION 0600]: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on] ***/
user_pref("_user.js.parrot", "0600 syntax error: the parrot's no more!");
/* 0601: disable link prefetching
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Link_prefetching_FAQ ***/
user_pref("network.prefetch-next", false);
/* 0602: disable DNS prefetching
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control ***/
user_pref("network.dns.disablePrefetch", true);
   // user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
/* 0603: disable predictor / prefetching ***/
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
/* 0604: disable link-mouseover opening connection to linked server
 * [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests ***/
user_pref("network.http.speculative-parallel-limit", 0);
/* 0605: disable mousedown speculative connections on bookmarks and history [FF98+] ***/
user_pref("browser.places.speculativeConnect.enabled", false);
/* 0610: enforce no "Hyperlink Auditing" (click tracking)
 * [1] https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/ ***/
   // user_pref("browser.send_pings", false); // [DEFAULT: false]

/*** [SECTION 0700]: DNS / DoH / PROXY / SOCKS ***/
user_pref("_user.js.parrot", "0700 syntax error: the parrot's given up the ghost!");
/* 0702: set the proxy server to do any DNS lookups when using SOCKS
 * e.g. in Tor, this stops your local DNS server from knowing your Tor destination
 * as a remote Tor node will handle the DNS request
 * [1] https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers ***/
user_pref("network.proxy.socks_remote_dns", true);
/* 0703: disable using UNC (Uniform Naming Convention) paths [FF61+]
 * [SETUP-CHROME] Can break extensions for profiles on network shares
 * [1] https://bugzilla.mozilla.org/1413868 ***/
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
/* 0704: disable GIO as a potential proxy bypass vector
 * Gvfs/GIO has a set of supported protocols like obex, network, archive, computer,
 * dav, cdda, gphoto2, trash, etc. From FF87-117, by default only sftp was accepted
 * [1] https://bugzilla.mozilla.org/1433507
 * [2] https://en.wikipedia.org/wiki/GVfs
 * [3] https://en.wikipedia.org/wiki/GIO_(software) ***/
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF] [DEFAULT: "" FF118+]
/* 0705: disable proxy direct failover for system requests [FF91+]
 * [WARNING] Default true is a security feature against malicious extensions [1]
 * [SETUP-CHROME] If you use a proxy and you trust your extensions
 * [1] https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/ ***/
   // user_pref("network.proxy.failover_direct", false);
/* 0706: disable proxy bypass for system request failures [FF95+]
 * RemoteSettings, UpdateService, Telemetry [1]
 * [WARNING] If false, this will break the fallback for some security features
 * [SETUP-CHROME] If you use a proxy and you understand the security impact
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1732792,1733994,1733481 ***/
   // user_pref("network.proxy.allow_bypass", false);
/* 0710: enable DNS-over-HTTPS (DoH) [FF60+]
 * 0=default, 2=increased (TRR (Trusted Recursive Resolver) first), 3=max (TRR only), 5=off (no rollout)
 * see "doh-rollout.home-region": USA 2019, Canada 2021, Russia/Ukraine 2022 [3]
 * [SETTING] Privacy & Security>DNS over HTTPS
 * [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
 * [2] https://wiki.mozilla.org/Security/DOH-resolver-policy
 * [3] https://support.mozilla.org/en-US/kb/firefox-dns-over-https
 * [4] https://www.eff.org/deeplinks/2020/12/dns-doh-and-odoh-oh-my-year-review-2020 ***/
   // user_pref("network.trr.mode", 3);
/* 0712: set DoH provider
 * The custom uri is the value shown when you "Choose provider>Custom>"
 * [NOTE] If you USE custom then "network.trr.uri" should be set the same
 * [SETTING] Privacy & Security>DNS over HTTPS>Increased/Max>Choose provider ***/
   // user_pref("network.trr.uri", "https://example.dns");
   // user_pref("network.trr.custom_uri", "https://example.dns");

/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
user_pref("_user.js.parrot", "0800 syntax error: the parrot's ceased to be!");
/* 0801: disable location bar making speculative connections [FF56+]
 * [1] https://bugzilla.mozilla.org/1348275 ***/
user_pref("browser.urlbar.speculativeConnect.enabled", false);
/* 0802: disable location bar contextual suggestions
 * [SETTING] Privacy & Security>Address Bar>Suggestions from...
 * [1] https://blog.mozilla.org/data/2021/09/15/data-and-firefox-suggest/ ***/
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+]
/* 0803: disable live search suggestions
 * [NOTE] Both must be true for the location bar to work
 * [SETUP-CHROME] Override these if you trust and use a privacy respecting search engine
 * [SETTING] Search>Provide search suggestions | Show search suggestions in address bar results ***/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
/* 0805: disable urlbar trending search suggestions [FF118+]
 * [SETTING] Search>Search Suggestions>Show trending search suggestions (FF119) ***/
user_pref("browser.urlbar.trending.featureGate", false);
/* 0806: disable urlbar suggestions ***/
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
/* 0807: disable urlbar clipboard suggestions [FF118+] ***/
   // user_pref("browser.urlbar.clipboard.featureGate", false); // [DEFAULT: false]
/* 0810: disable search and form history
 * [SETUP-WEB] Be aware that autocomplete form data can be read by third parties [1][2]
 * [NOTE] We also clear formdata on exit (2811)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember search and form history
 * [1] https://blog.mindedsecurity.com/2011/10/autocompleteagain.html
 * [2] https://bugzilla.mozilla.org/381681 ***/
user_pref("browser.formfill.enable", false);
/* 0815: disable tab-to-search [FF85+]
 * Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest>Search engines ***/
   // user_pref("browser.urlbar.suggest.engines", false);
/* 0820: disable coloring of visited links
 * [SETUP-HARDEN] Bulk rapid history sniffing was mitigated in 2010 [1][2]. Slower and more expensive
 * redraw timing attacks were largely mitigated in FF77+ [3]. Using RFP (4501) further hampers timing
 * attacks. Don't forget clearing history on exit (2811). However, social engineering [2#limits][4][5]
 * and advanced targeted timing attacks could still produce usable results
 * [1] https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector
 * [2] https://dbaron.org/mozilla/visited-privacy
 * [3] https://bugzilla.mozilla.org/1632765
 * [4] https://earthlng.github.io/testpages/visited_links.html (see github wiki APPENDIX A on how to use)
 * [5] https://lcamtuf.blogspot.com/2016/08/css-mix-blend-mode-is-bad-for-keeping.html ***/
   // user_pref("layout.css.visited_links_enabled", false);
/* 0830: enable separate default search engine in Private Windows and its UI setting
 * [SETTING] Search>Default Search Engine>Choose a different default search engine for Private Windows only ***/
user_pref("browser.search.separatePrivateDefault", true); // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]

/*** [SECTION 0900]: PASSWORDS
   [1] https://support.mozilla.org/kb/use-primary-password-protect-stored-logins-and-pas
***/
user_pref("_user.js.parrot", "0900 syntax error: the parrot's expired!");
/* 0903: disable auto-filling username & password form fields
 * can leak in cross-site forms *and* be spoofed
 * [NOTE] Username & password is still available when you enter the field
 * [SETTING] Privacy & Security>Logins and Passwords>Autofill logins and passwords
 * [1] https://freedom-to-tinker.com/2017/12/27/no-boundaries-for-user-identities-web-trackers-exploit-browser-login-managers/
 * [2] https://homes.esat.kuleuven.be/~asenol/leaky-forms/ ***/
user_pref("signon.autofillForms", false);
/* 0904: disable formless login capture for Password Manager [FF51+] ***/
user_pref("signon.formlessCapture.enabled", false);
/* 0905: limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+]
 * hardens against potential credentials phishing
 * 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
 * 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
 * 2 = allow sub-resources to open HTTP authentication credentials dialogs (default) ***/
user_pref("network.auth.subresource-http-auth-allow", 1);
/* 0906: enforce no automatic authentication on Microsoft sites [FF91+] [WINDOWS 10+]
 * [SETTING] Privacy & Security>Logins and Passwords>Allow Windows single sign-on for...
 * [1] https://support.mozilla.org/kb/windows-sso ***/
   // user_pref("network.http.windows-sso.enabled", false); // [DEFAULT: false]

/*** [SECTION 1000]: DISK AVOIDANCE ***/
user_pref("_user.js.parrot", "1000 syntax error: the parrot's gone to meet 'is maker!");
/* 1001: disable disk cache
 * [SETUP-CHROME] If you think disk cache helps perf, then feel free to override this
 * [NOTE] We also clear cache on exit (2811) ***/
user_pref("browser.cache.disk.enable", false);
/* 1002: disable media cache from writing to disk in Private Browsing
 * [NOTE] MSE (Media Source Extensions) are already stored in-memory in PB ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
/* 1003: disable storing extra session data [SETUP-CHROME]
 * define on which sites to save extra session data such as form content, cookies and POST data
 * 0=everywhere, 1=unencrypted sites, 2=nowhere ***/
user_pref("browser.sessionstore.privacy_level", 2);
/* 1005: disable automatic Firefox start and session restore after reboot [FF62+] [WINDOWS]
 * [1] https://bugzilla.mozilla.org/603903 ***/
user_pref("toolkit.winRegisterApplicationRestart", false);
/* 1006: disable favicons in shortcuts [WINDOWS]
 * URL shortcuts use a cached randomly named .ico file which is stored in your
 * profile/shortcutCache directory. The .ico remains after the shortcut is deleted
 * If set to false then the shortcuts use a generic Firefox icon ***/
user_pref("browser.shell.shortcutFavicons", false);

/*** [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
   Your cipher and other settings can be used in server side fingerprinting
   [TEST] https://www.ssllabs.com/ssltest/viewMyClient.html
   [TEST] https://browserleaks.com/ssl
   [TEST] https://ja3er.com/
   [1] https://www.securityartwork.es/2017/02/02/tls-client-fingerprinting-with-bro/
***/
user_pref("_user.js.parrot", "1200 syntax error: the parrot's a stiff!");
/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) ***/
/* 1201: require safe negotiation
 * Blocks connections to servers that don't support RFC 5746 [2] as they're potentially vulnerable to a
 * MiTM attack [3]. A server without RFC 5746 can be safe from the attack if it disables renegotiations
 * but the problem is that the browser can't know that. Setting this pref to true is the only way for the
 * browser to ensure there will be no unsafe renegotiations on the channel between the browser and the server
 * [SETUP-WEB] SSL_ERROR_UNSAFE_NEGOTIATION: is it worth overriding this for that one site?
 * [STATS] SSL Labs (Nov 2023) reports over 99.5% of top sites have secure renegotiation [4]
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://datatracker.ietf.org/doc/html/rfc5746
 * [3] https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555
 * [4] https://www.ssllabs.com/ssl-pulse/ ***/
user_pref("security.ssl.require_safe_negotiation", true);
/* 1206: disable TLS1.3 0-RTT (round-trip time) [FF51+]
 * This data is not forward secret, as it is encrypted solely under keys derived using
 * the offered PSK. There are no guarantees of non-replay between connections
 * [1] https://github.com/tlswg/tls13-spec/issues/1001
 * [2] https://www.rfc-editor.org/rfc/rfc9001.html#name-replay-attacks-with-0-rtt
 * [3] https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/ ***/
user_pref("security.tls.enable_0rtt_data", false);

/** OCSP (Online Certificate Status Protocol)
   [1] https://scotthelme.co.uk/revocation-is-broken/
   [2] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
***/
/* 1211: enforce OCSP fetching to confirm current validity of certificates
 * 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
 * OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority)
 * It's a trade-off between security (checking) and privacy (leaking info to the CA)
 * [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
 * [SETTING] Privacy & Security>Security>Certificates>Query OCSP responder servers...
 * [1] https://en.wikipedia.org/wiki/Ocsp ***/
user_pref("security.OCSP.enabled", 1); // [DEFAULT: 1]
/* 1212: set OCSP fetch failures (non-stapled, see 1211) to hard-fail
 * [SETUP-WEB] SEC_ERROR_OCSP_SERVER_ERROR
 * When a CA cannot be reached to validate a cert, Firefox just continues the connection (=soft-fail)
 * Setting this pref to true tells Firefox to instead terminate the connection (=hard-fail)
 * It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm a cert is still valid (it
 * could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers)
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
 * [2] https://www.imperialviolet.org/2014/04/19/revchecking.html ***/
user_pref("security.OCSP.require", true);

/** CERTS / HPKP (HTTP Public Key Pinning) ***/
/* 1223: enable strict PKP (Public Key Pinning)
 * 0=disabled, 1=allow user MiTM (default; such as your antivirus), 2=strict
 * [SETUP-WEB] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE ***/
user_pref("security.cert_pinning.enforcement_level", 2);
/* 1224: enable CRLite [FF73+]
 * 0 = disabled
 * 1 = consult CRLite but only collect telemetry
 * 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results
 * 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" (default)
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1429800,1670985,1753071
 * [2] https://blog.mozilla.org/security/tag/crlite/ ***/
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** MIXED CONTENT ***/
/* 1241: disable insecure passive content (such as images) on https pages ***/
   // user_pref("security.mixed_content.block_display_content", true); // Defense-in-depth (see 1244)
/* 1244: enable HTTPS-Only mode in all windows
 * When the top-level is HTTPS, insecure subresources are also upgraded (silent fail)
 * [SETTING] to add site exceptions: Padlock>HTTPS-Only mode>On (after "Continue to HTTP Site")
 * [SETTING] Privacy & Security>HTTPS-Only Mode (and manage exceptions)
 * [TEST] http://example.com [upgrade]
 * [TEST] http://httpforever.com/ | http://http.rip [no upgrade] ***/
user_pref("dom.security.https_only_mode", true); // [FF76+]
   // user_pref("dom.security.https_only_mode_pbm", true); // [FF80+]
/* 1245: enable HTTPS-Only mode for local resources [FF77+] ***/
   // user_pref("dom.security.https_only_mode.upgrade_local", true);
/* 1246: disable HTTP background requests [FF82+]
 * When attempting to upgrade, if the server doesn't respond within 3 seconds, Firefox sends
 * a top-level HTTP request without path in order to check if the server supports HTTPS or not
 * This is done to avoid waiting for a timeout which takes 90 seconds
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1642387,1660945 ***/
user_pref("dom.security.https_only_mode_send_http_background_request", false);

/** UI (User Interface) ***/
/* 1270: display warning on the padlock for "broken security" (if 1201 is false)
 * Bug: warning padlock not indicated for subresources on a secure page! [2]
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://bugzilla.mozilla.org/1353705 ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
/* 1272: display advanced information on Insecure Connection warning pages
 * only works when it's possible to add an exception
 * i.e. it doesn't work for HSTS discrepancies (https://subdomain.preloaded-hsts.badssl.com/)
 * [TEST] https://expired.badssl.com/ ***/
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/*** [SECTION 1600]: REFERERS
                  full URI: https://example.com:8888/foo/bar.html?id=1234
     scheme+host+port+path: https://example.com:8888/foo/bar.html
          scheme+host+port: https://example.com:8888
   [1] https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/
***/
user_pref("_user.js.parrot", "1600 syntax error: the parrot rests in peace!");
/* 1602: control the amount of cross-origin information to send [FF52+]
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/*** [SECTION 1700]: CONTAINERS ***/
user_pref("_user.js.parrot", "1700 syntax error: the parrot's bit the dust!");
/* 1701: enable Container Tabs and its UI setting [FF50+]
 * [SETTING] General>Tabs>Enable Container Tabs
 * https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers ***/
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
/* 1702: set behavior on "+ Tab" button to display container menu on left click [FF74+]
 * [NOTE] The menu is always shown on long press and right click
 * [SETTING] General>Tabs>Enable Container Tabs>Settings>Select a container for each new tab ***/
   // user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

/*** [SECTION 2000]: PLUGINS / MEDIA / WEBRTC ***/
user_pref("_user.js.parrot", "2000 syntax error: the parrot's snuffed it!");
/* 2002: force WebRTC inside the proxy [FF70+] ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
/* 2003: force a single network interface for ICE candidates generation [FF42+]
 * When using a system-wide proxy, it uses the proxy interface
 * [1] https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate
 * [2] https://wiki.mozilla.org/Media/WebRTC/Privacy ***/
user_pref("media.peerconnection.ice.default_address_only", true);
/* 2004: force exclusion of private IPs from ICE candidates [FF51+]
 * [SETUP-HARDEN] This will protect your private IP even in TRUSTED scenarios after you
 * grant device access, but often results in breakage on video-conferencing platforms ***/
   // user_pref("media.peerconnection.ice.no_host", true);
/* 2020: disable GMP (Gecko Media Plugins)
 * [1] https://wiki.mozilla.org/GeckoMediaPlugins ***/
   // user_pref("media.gmp-provider.enabled", false);

/*** [SECTION 2400]: DOM (DOCUMENT OBJECT MODEL) ***/
user_pref("_user.js.parrot", "2400 syntax error: the parrot's kicked the bucket!");
/* 2402: prevent scripts from moving and resizing open windows ***/
user_pref("dom.disable_window_move_resize", true);

/*** [SECTION 2600]: MISCELLANEOUS ***/
user_pref("_user.js.parrot", "2600 syntax error: the parrot's run down the curtain!");
/* 2603: remove temp files opened from non-PB windows with an external application
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=302433,1738574 ***/
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);
/* 2606: disable UITour backend so there is no chance that a remote page can use it ***/
user_pref("browser.uitour.enabled", false);
   // user_pref("browser.uitour.url", ""); // Defense-in-depth
/* 2608: reset remote debugging to disabled
 * [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/16222 ***/
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
/* 2615: disable websites overriding Firefox's keyboard shortcuts [FF58+]
 * 0 (default) or 1=allow, 2=block
 * [SETTING] to add site exceptions: Ctrl+I>Permissions>Override Keyboard Shortcuts ***/
   // user_pref("permissions.default.shortcuts", 2);
/* 2616: remove special permissions for certain mozilla domains [FF35+]
 * [1] resource://app/defaults/permissions ***/
user_pref("permissions.manager.defaultsUrl", "");
/* 2617: remove webchannel whitelist ***/
user_pref("webchannel.allowObject.urlWhitelist", "");
/* 2619: use Punycode in Internationalized Domain Names to eliminate possible spoofing
 * [SETUP-WEB] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded
 * [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
 * [1] https://wiki.mozilla.org/IDN_Display_Algorithm
 * [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
 * [3] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=punycode+firefox
 * [4] https://www.xudongz.com/blog/2017/idn-phishing/ ***/
user_pref("network.IDN_show_punycode", true);
/* 2620: enforce PDFJS, disable PDFJS scripting
 * This setting controls if the option "Display in Firefox" is available in the setting below
 *   and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With")
 * [WHY] pdfjs is lightweight, open source, and secure: the last exploit was June 2015 [1]
 *   It doesn't break "state separation" of browser content (by not sharing with OS, independent apps).
 *   It maintains disk avoidance and application data isolation. It's convenient. You can still save to disk.
 * [NOTE] JS can still force a pdf to open in-browser by bundling its own code
 * [SETUP-CHROME] You may prefer a different pdf reader for security/workflow reasons
 * [SETTING] General>Applications>Portable Document Format (PDF)
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=pdf.js+firefox ***/
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
/* 2624: disable middle click on new tab button opening URLs or searches using clipboard [FF115+] */
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // [DEFAULT: false NON-LINUX]

/** DOWNLOADS ***/
/* 2651: enable user interaction for security by always asking where to download
 * [SETUP-CHROME] On Android this blocks longtapping and saving images
 * [SETTING] General>Downloads>Always ask you where to save files ***/
user_pref("browser.download.useDownloadDir", false);
/* 2652: disable downloads panel opening on every download [FF96+] ***/
user_pref("browser.download.alwaysOpenPanel", false);
/* 2653: disable adding downloads to the system's "recent documents" list ***/
user_pref("browser.download.manager.addToRecentDocs", false);
/* 2654: enable user interaction for security by always asking how to handle new mimetypes [FF101+]
 * [SETTING] General>Files and Applications>What should Firefox do with other files ***/
user_pref("browser.download.always_ask_before_handling_new_types", true);

/** EXTENSIONS ***/
/* 2660: limit allowed extension directories
 * 1=profile, 2=user, 4=application, 8=system, 16=temporary, 31=all
 * The pref value represents the sum: e.g. 5 would be profile and application directories
 * [SETUP-CHROME] Breaks usage of files which are installed outside allowed directories
 * [1] https://archive.is/DYjAM ***/
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
   // user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
/* 2661: disable bypassing 3rd party extension install prompts [FF82+]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1659530,1681331 ***/
user_pref("extensions.postDownloadThirdPartyPrompt", false);
/* 2662: disable webextension restrictions on certain mozilla domains (you also need 4503) [FF60+]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
   // user_pref("extensions.webextensions.restrictedDomains", "");

/*** [SECTION 2700]: ETP (ENHANCED TRACKING PROTECTION) ***/
user_pref("_user.js.parrot", "2700 syntax error: the parrot's joined the bleedin' choir invisible!");
/* 2701: enable ETP Strict Mode [FF86+]
 * ETP Strict Mode enables Total Cookie Protection (TCP)
 * [NOTE] Adding site exceptions disables all ETP protections for that site and increases the risk of
 * cross-site state tracking e.g. exceptions for SiteA and SiteB means PartyC on both sites is shared
 * [1] https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/
 * [SETTING] to add site exceptions: Urlbar>ETP Shield
 * [SETTING] to manage site exceptions: Options>Privacy & Security>Enhanced Tracking Protection>Manage Exceptions ***/
user_pref("browser.contentblocking.category", "strict"); // [HIDDEN PREF]
/* 2702: disable ETP web compat features [FF93+]
 * [SETUP-HARDEN] Includes skip lists, heuristics (SmartBlock) and automatic grants
 * Opener and redirect heuristics are granted for 30 days, see [3]
 * [1] https://blog.mozilla.org/security/2021/07/13/smartblock-v2/
 * [2] https://hg.mozilla.org/mozilla-central/rev/e5483fd469ab#l4.12
 * [3] https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning#storage_access_heuristics ***/
   // user_pref("privacy.antitracking.enableWebcompat", false);

/*** [SECTION 2800]: SHUTDOWN & SANITIZING ***/
user_pref("_user.js.parrot", "2800 syntax error: the parrot's bleedin' demised!");
/* 2810: enable Firefox to clear items on shutdown
 * [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes | Settings ***/
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

/** SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS ***/
/* 2811: set/enforce what items to clear on shutdown (if 2810 is true) [SETUP-CHROME]
 * [NOTE] If "history" is true, downloads will also be cleared
 * [NOTE] "sessions": Active Logins: refers to HTTP Basic Authentication [1], not logins via cookies
 * [1] https://en.wikipedia.org/wiki/Basic_access_authentication ***/
user_pref("privacy.clearOnShutdown.cache", true);     // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.downloads", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.formdata", true);  // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", true);   // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.sessions", true);  // [DEFAULT: true]
   // user_pref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT: false]
/* 2812: set Session Restore to clear on shutdown (if 2810 is true) [FF34+]
 * [NOTE] Not needed if Session Restore is not used (0102) or it is already cleared with history (2811)
 * [NOTE] If true, this prevents resuming from crashes (also see 5008) ***/
   // user_pref("privacy.clearOnShutdown.openWindows", true);

/** SANITIZE ON SHUTDOWN: RESPECTS "ALLOW" SITE EXCEPTIONS FF103+ ***/
/* 2815: set "Cookies" and "Site Data" to clear on shutdown (if 2810 is true) [SETUP-CHROME]
 * [NOTE] Exceptions: A "cookie" block permission also controls "offlineApps" (see note below).
 * serviceWorkers require an "Allow" permission. For cross-domain logins, add exceptions for
 * both sites e.g. https://www.youtube.com (site) + https://accounts.google.com (single sign on)
 * [NOTE] "offlineApps": Offline Website Data: localStorage, service worker cache, QuotaManager (IndexedDB, asm-cache)
 * [WARNING] Be selective with what sites you "Allow", as they also disable partitioning (1767271)
 * [SETTING] to add site exceptions: Ctrl+I>Permissions>Cookies>Allow (when on the website in question)
 * [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Settings ***/
user_pref("privacy.clearOnShutdown.cookies", true); // Cookies
user_pref("privacy.clearOnShutdown.offlineApps", true); // Site Data

/** SANITIZE MANUAL: IGNORES "ALLOW" SITE EXCEPTIONS ***/
/* 2820: reset default items to clear with Ctrl-Shift-Del [SETUP-CHROME]
 * This dialog can also be accessed from the menu History>Clear Recent History
 * Firefox remembers your last choices. This will reset them when you start Firefox
 * [NOTE] Regardless of what you set "downloads" to, as soon as the dialog
 * for "Clear Recent History" is opened, it is synced to the same as "history" ***/
user_pref("privacy.cpd.cache", true);    // [DEFAULT: true]
user_pref("privacy.cpd.formdata", true); // [DEFAULT: true]
user_pref("privacy.cpd.history", true);  // [DEFAULT: true]
user_pref("privacy.cpd.sessions", true); // [DEFAULT: true]
user_pref("privacy.cpd.offlineApps", false); // [DEFAULT: false]
user_pref("privacy.cpd.cookies", false);
   // user_pref("privacy.cpd.downloads", true); // not used, see note above
   // user_pref("privacy.cpd.openWindows", false); // Session Restore
   // user_pref("privacy.cpd.passwords", false);
   // user_pref("privacy.cpd.siteSettings", false);
/* 2822: reset default "Time range to clear" for "Clear Recent History" (2820)
 * Firefox remembers your last choice. This will reset the value when you start Firefox
 * 0=everything, 1=last hour, 2=last two hours, 3=last four hours, 4=today
 * [NOTE] Values 5 (last 5 minutes) and 6 (last 24 hours) are not listed in the dropdown,
 * which will display a blank value, and are not guaranteed to work ***/
user_pref("privacy.sanitize.timeSpan", 0);

/*** [SECTION 4500]: RFP (resistFingerprinting)
   RFP covers a wide range of ongoing fingerprinting solutions.
   It is an all-or-nothing buy in: you cannot pick and choose what parts you want
   [TEST] https://arkenfox.github.io/TZP/tzp.html

   [WARNING] DO NOT USE extensions to alter RFP protected metrics

    418986 - limit window.screen & CSS media queries (FF41)
   1281949 - spoof screen orientation (FF50)
   1330890 - spoof timezone as UTC0 (FF55)
   1360039 - spoof navigator.hardwareConcurrency as 2 (FF55)
 FF56
   1333651 - spoof User Agent & Navigator API
      version: android version spoofed as ESR (FF119 or lower)
      OS: JS spoofed as Windows 10, OS 10.15, Android 10, or Linux | HTTP Headers spoofed as Windows or Android
   1369319 - disable device sensor API
   1369357 - disable site specific zoom
   1337161 - hide gamepads from content
   1372072 - spoof network information API as "unknown" when dom.netinfo.enabled = true
   1333641 - reduce fingerprinting in WebSpeech API
 FF57
   1369309 - spoof media statistics
   1382499 - reduce screen co-ordinate fingerprinting in Touch API
   1217290 & 1409677 - enable some fingerprinting resistance for WebGL
   1354633 - limit MediaError.message to a whitelist
 FF58+
   1372073 - spoof/block fingerprinting in MediaDevices API (FF59)
      Spoof: enumerate devices as one "Internal Camera" and one "Internal Microphone"
      Block: suppresses the ondevicechange event
   1039069 - warn when language prefs are not set to "en*" (also see 0210, 0211) (FF59)
   1222285 & 1433592 - spoof keyboard events and suppress keyboard modifier events (FF59)
      Spoofing mimics the content language of the document. Currently it only supports en-US.
      Modifier events suppressed are SHIFT and both ALT keys. Chrome is not affected.
   1337157 - disable WebGL debug renderer info (FF60)
   1459089 - disable OS locale in HTTP Accept-Language headers (ANDROID) (FF62)
   1479239 - return "no-preference" with prefers-reduced-motion (FF63)
   1363508 - spoof/suppress Pointer Events (FF64)
   1492766 - spoof pointerEvent.pointerid (FF65)
   1485266 - disable exposure of system colors to CSS or canvas (FF67)
   1494034 - return "light" with prefers-color-scheme (FF67)
   1564422 - spoof audioContext outputLatency (FF70)
   1595823 - return audioContext sampleRate as 44100 (FF72)
   1607316 - spoof pointer as coarse and hover as none (ANDROID) (FF74)
   1621433 - randomize canvas (previously FF58+ returned an all-white canvas) (FF78)
   1506364 - return "no-preference" with prefers-contrast (FF80)
   1653987 - limit font visibility to bundled and "Base Fonts" (Windows, Mac, some Linux) (FF80)
   1461454 - spoof smooth=true and powerEfficient=false for supported media in MediaCapabilities (FF82)
    531915 - use fdlibm's sin, cos and tan in jsmath (FF93, ESR91.1)
   1756280 - enforce navigator.pdfViewerEnabled as true and plugins/mimeTypes as hard-coded values (FF100-115)
   1692609 - reduce JS timing precision to 16.67ms (previously FF55+ was 100ms) (FF102)
   1422237 - return "srgb" with color-gamut (FF110)
   1794628 - return "none" with inverted-colors (FF114)
***/
user_pref("_user.js.parrot", "4500 syntax error: the parrot's popped 'is clogs");
/* 4501: enable RFP
 * [SETUP-WEB] RFP can cause some website breakage: mainly canvas, use a canvas site exception via the urlbar
 * RFP also has a few side effects: mainly timezone is UTC0, and websites will prefer light theme
 * [NOTE] pbmode applies if true and the original pref is false
 * [1] https://bugzilla.mozilla.org/418986 ***/
user_pref("privacy.resistFingerprinting", true); // [FF41+]
   // user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]
/* 4502: set new window size rounding max values [FF55+]
 * [SETUP-CHROME] sizes round down in hundreds: width to 200s and height to 100s, to fit your screen
 * [1] https://bugzilla.mozilla.org/1330882 ***/
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);
/* 4503: disable mozAddonManager Web API [FF57+]
 * [NOTE] To allow extensions to work on AMO, you also need 2662
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
/* 4504: enable RFP letterboxing [FF67+]
 * Dynamically resizes the inner window by applying margins in stepped ranges [2]
 * If you use the dimension pref, then it will only apply those resolutions.
 * The format is "width1xheight1, width2xheight2, ..." (e.g. "800x600, 1000x1000")
 * [SETUP-WEB] This is independent of RFP (4501). If you're not using RFP, or you are but
 * dislike the margins, then flip this pref, keeping in mind that it is effectively fingerprintable
 * [WARNING] DO NOT USE: the dimension pref is only meant for testing
 * [1] https://bugzilla.mozilla.org/1407366
 * [2] https://hg.mozilla.org/mozilla-central/rev/6d2d7856e468#l2.32 ***/
user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
   // user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); // [HIDDEN PREF]
/* 4505: experimental RFP [FF91+]
 * [WARNING] DO NOT USE unless testing, see [1] comment 12
 * [1] https://bugzilla.mozilla.org/1635603 ***/
   // user_pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");
/* 4510: disable using system colors
 * [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Use system colors ***/
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false NON-WINDOWS]
/* 4511: enforce non-native widget theme
 * Security: removes/reduces system API calls, e.g. win32k API [1]
 * Fingerprinting: provides a uniform look and feel across platforms [2]
 * [1] https://bugzilla.mozilla.org/1381938
 * [2] https://bugzilla.mozilla.org/1411425 ***/
user_pref("widget.non-native-theme.enabled", true); // [DEFAULT: true]
/* 4512: enforce links targeting new windows to open in a new tab instead
 * 1=most recent window or tab, 2=new window, 3=new tab
 * Stops malicious window sizes and some screen resolution leaks.
 * You can still right-click a link and open in a new window
 * [SETTING] General>Tabs>Open links in tabs instead of new windows
 * [TEST] https://arkenfox.github.io/TZP/tzp.html#screen
 * [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/9881 ***/
user_pref("browser.link.open_newwindow", 3); // [DEFAULT: 3]
/* 4513: set all open window methods to abide by "browser.link.open_newwindow" (4512)
 * [1] https://searchfox.org/mozilla-central/source/dom/tests/browser/browser_test_new_window_from_content.js ***/
user_pref("browser.link.open_newwindow.restriction", 0);
/* 4520: disable WebGL (Web Graphics Library)
 * [SETUP-WEB] If you need it then override it. RFP still randomizes canvas for naive scripts ***/
user_pref("webgl.disabled", true);

/*** [SECTION 5000]: OPTIONAL OPSEC
   Disk avoidance, application data isolation, eyeballs...
***/
user_pref("_user.js.parrot", "5000 syntax error: the parrot's taken 'is last bow");
/* 5001: start Firefox in PB (Private Browsing) mode
 * [NOTE] In this mode all windows are "private windows" and the PB mode icon is not displayed
 * [NOTE] The P in PB mode can be misleading: it means no "persistent" disk state such as history,
 * caches, searches, cookies, localStorage, IndexedDB etc (which you can achieve in normal mode).
 * In fact, PB mode limits or removes the ability to control some of these, and you need to quit
 * Firefox to clear them. PB is best used as a one off window (Menu>New Private Window) to provide
 * a temporary self-contained new session. Close all private windows to clear the PB session.
 * [SETTING] Privacy & Security>History>Custom Settings>Always use private browsing mode
 * [1] https://wiki.mozilla.org/Private_Browsing
 * [2] https://support.mozilla.org/kb/common-myths-about-private-browsing ***/
   // user_pref("browser.privatebrowsing.autostart", true);
/* 5002: disable memory cache
 * capacity: -1=determine dynamically (default), 0=none, n=memory capacity in kibibytes ***/
   // user_pref("browser.cache.memory.enable", false);
   // user_pref("browser.cache.memory.capacity", 0);
/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
   // user_pref("signon.rememberSignons", false);
/* 5004: disable permissions manager from writing to disk [FF41+] [RESTART]
 * [NOTE] This means any permission changes are session only
 * [1] https://bugzilla.mozilla.org/967812 ***/
   // user_pref("permissions.memory_only", true); // [HIDDEN PREF]
/* 5005: disable intermediate certificate caching [FF41+] [RESTART]
 * [NOTE] This affects login/cert/key dbs. The effect is all credentials are session-only.
 * Saved logins and passwords are not available. Reset the pref and restart to return them ***/
   // user_pref("security.nocertdb", true);
/* 5006: disable favicons in history and bookmarks
 * [NOTE] Stored as data blobs in favicons.sqlite, these don't reveal anything that your
 * actual history (and bookmarks) already do. Your history is more detailed, so
 * control that instead; e.g. disable history, clear history on exit, use PB mode
 * [NOTE] favicons.sqlite is sanitized on Firefox close ***/
   // user_pref("browser.chrome.site_icons", false);
/* 5007: exclude "Undo Closed Tabs" in Session Restore ***/
   // user_pref("browser.sessionstore.max_tabs_undo", 0);
/* 5008: disable resuming session from crash
 * [TEST] about:crashparent ***/
   // user_pref("browser.sessionstore.resume_from_crash", false);
/* 5009: disable "open with" in download dialog [FF50+]
 * Application data isolation [1]
 * [1] https://bugzilla.mozilla.org/1281959 ***/
   // user_pref("browser.download.forbid_open_with", true);
/* 5010: disable location bar suggestion types
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest ***/
   // user_pref("browser.urlbar.suggest.history", false);
   // user_pref("browser.urlbar.suggest.bookmark", false);
   // user_pref("browser.urlbar.suggest.openpage", false);
   // user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
/* 5011: disable location bar dropdown
 * This value controls the total number of entries to appear in the location bar dropdown ***/
   // user_pref("browser.urlbar.maxRichResults", 0);
/* 5012: disable location bar autofill
 * [1] https://support.mozilla.org/kb/address-bar-autocomplete-firefox#w_url-autocomplete ***/
   // user_pref("browser.urlbar.autoFill", false);
/* 5013: disable browsing and download history
 * [NOTE] We also clear history and downloads on exit (2811)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember browsing and download history ***/
   // user_pref("places.history.enabled", false);
/* 5014: disable Windows jumplist [WINDOWS] ***/
   // user_pref("browser.taskbar.lists.enabled", false);
   // user_pref("browser.taskbar.lists.frequent.enabled", false);
   // user_pref("browser.taskbar.lists.recent.enabled", false);
   // user_pref("browser.taskbar.lists.tasks.enabled", false);
/* 5016: discourage downloading to desktop
 * 0=desktop, 1=downloads (default), 2=custom
 * [SETTING] To set your custom default "downloads": General>Downloads>Save files to ***/
   // user_pref("browser.download.folderList", 2);
/* 5017: disable Form Autofill
 * If .supportedCountries includes your region (browser.search.region) and .supported
 * is "detect" (default), then the UI will show. Stored data is not secure, uses JSON
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
   // user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
   // user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
/* 5018: limit events that can cause a pop-up ***/
   // user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
/* 5019: disable page thumbnail collection ***/
   // user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
/* 5020: disable Windows native notifications and use app notications instead [FF111+] [WINDOWS] ***/
   // user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);
/* 5021: disable location bar using search
 * Don't leak URL typos to a search engine, give an error message instead
 * Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com"
 * [NOTE] This does not affect explicit user action such as using search buttons in the
 * dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo) ***/
   // user_pref("keyword.enabled", false);

/*** [SECTION 5500]: OPTIONAL HARDENING
   Not recommended. Overriding these can cause breakage and performance issues,
   they are mostly fingerprintable, and the threat model is practically nonexistent
***/
user_pref("_user.js.parrot", "5500 syntax error: this is an ex-parrot!");
/* 5501: disable MathML (Mathematical Markup Language) [FF51+]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=mathml ***/
   // user_pref("mathml.disabled", true); // 1173199
/* 5502: disable in-content SVG (Scalable Vector Graphics) [FF53+]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+svg ***/
   // user_pref("svg.disabled", true); // 1216893
/* 5503: disable graphite
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+graphite
 * [2] https://en.wikipedia.org/wiki/Graphite_(SIL) ***/
   // user_pref("gfx.font_rendering.graphite.enabled", false);
/* 5504: disable asm.js [FF22+]
 * [1] http://asmjs.org/
 * [2] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=asm.js
 * [3] https://rh0dev.github.io/blog/2017/the-return-of-the-jit/ ***/
   // user_pref("javascript.options.asmjs", false);
/* 5505: disable Ion and baseline JIT to harden against JS exploits
 * [NOTE] When both Ion and JIT are disabled, and trustedprincipals
 * is enabled, then Ion can still be used by extensions (1599226)
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+jit
 * [2] https://microsoftedge.github.io/edgevr/posts/Super-Duper-Secure-Mode/ ***/
   // user_pref("javascript.options.ion", false);
   // user_pref("javascript.options.baselinejit", false);
   // user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
/* 5506: disable WebAssembly [FF52+]
 * Vulnerabilities [1] have increasingly been found, including those known and fixed
 * in native programs years ago [2]. WASM has powerful low-level access, making
 * certain attacks (brute-force) and vulnerabilities more possible
 * [STATS] ~0.2% of websites, about half of which are for cryptomining / malvertising [2][3]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=wasm
 * [2] https://spectrum.ieee.org/tech-talk/telecom/security/more-worries-over-the-security-of-web-assembly
 * [3] https://www.zdnet.com/article/half-of-the-websites-using-webassembly-use-it-for-malicious-purposes ***/
   // user_pref("javascript.options.wasm", false);
/* 5507: disable rendering of SVG OpenType fonts ***/
   // user_pref("gfx.font_rendering.opentype_svg.enabled", false);
/* 5508: disable all DRM content (EME: Encryption Media Extension)
 * Optionally hide the UI setting which also disables the DRM prompt
 * [SETTING] General>DRM Content>Play DRM-controlled content
 * [TEST] https://bitmovin.com/demos/drm
 * [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next ***/
   // user_pref("media.eme.enabled", false);
   // user_pref("browser.eme.ui.enabled", false);
/* 5509: disable IPv6 if using a VPN
 * This is an application level fallback. Disabling IPv6 is best done at an OS/network
 * level, and/or configured properly in system wide VPN setups.
 * [SETUP-WEB] PR_CONNECT_RESET_ERROR
 * [NOTE] PHP defaults to IPv6 with "localhost". Use "php -S 127.0.0.1:PORT"
 * [TEST] https://ipleak.org/
 * [1] https://www.internetsociety.org/tag/ipv6-security/ (Myths 2,4,5,6) ***/
   // user_pref("network.dns.disableIPv6", true);
/* 5510: control when to send a cross-origin referer
 * 0=always (default), 1=only if base domains match, 2=only if hosts match
 * [NOTE] Will cause breakage: older modems/routers and some sites e.g banks, vimeo, icloud, instagram ***/
   // user_pref("network.http.referer.XOriginPolicy", 2);
/* 5511: set DoH bootstrap address [FF89+]
 * Firefox uses the system DNS to initially resolve the IP address of your DoH server.
 * When set to a valid, working value that matches your "network.trr.uri" (0712) Firefox
 * won't use the system DNS. If the IP doesn't match then DoH won't work ***/
   // user_pref("network.trr.bootstrapAddr", "10.0.0.1"); // [HIDDEN PREF]

/*** [SECTION 6000]: DON'T TOUCH ***/
user_pref("_user.js.parrot", "6000 syntax error: the parrot's 'istory!");
/* 6001: enforce Firefox blocklist
 * [WHY] It includes updates for "revoked certificates"
 * [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/ ***/
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
/* 6002: enforce no referer spoofing
 * [WHY] Spoofing can affect CSRF (Cross-Site Request Forgery) protections ***/
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
/* 6004: enforce a security delay on some confirmation dialogs such as install, open/save
 * [1] https://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/ ***/
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
/* 6008: enforce no First Party Isolation [FF51+]
 * [WARNING] Replaced with network partitioning (FF85+) and TCP (2701), and enabling FPI
 * disables those. FPI is no longer maintained except at Tor Project for Tor Browser's config ***/
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]
/* 6009: enforce SmartBlock shims (about:compat) [FF81+]
 * [1] https://blog.mozilla.org/security/2021/03/23/introducing-smartblock/ ***/
user_pref("extensions.webcompat.enable_shims", true); // [HIDDEN PREF] [DEFAULT: true]
/* 6010: enforce no TLS 1.0/1.1 downgrades
 * [TEST] https://tls-v1-1.badssl.com:1010/ ***/
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
/* 6011: enforce disabling of Web Compatibility Reporter [FF56+]
 * Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla
 * [WHY] To prevent wasting Mozilla's time with a custom setup ***/
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
/* 6012: enforce Quarantined Domains [FF115+]
 * [WHY] https://support.mozilla.org/kb/quarantined-domains */
user_pref("extensions.quarantinedDomains.enabled", true); // [DEFAULT: true]
/* 6050: prefsCleaner: previously active items removed from arkenfox 115-127 ***/
   // user_pref("accessibility.force_disabled", "");
   // user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", "");
   // user_pref("network.protocol-handler.external.ms-windows-store", "");
   // user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", "");
   // user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", "");
   // user_pref("privacy.partition.serviceWorkers", "");

/*** [SECTION 7000]: DON'T BOTHER ***/
user_pref("_user.js.parrot", "7000 syntax error: the parrot's pushing up daisies!");
/* 7001: disable APIs
 * Location-Aware Browsing, Full Screen
 * [WHY] The API state is easily fingerprintable.
 * Geo is behind a prompt (7002). Full screen requires user interaction ***/
   // user_pref("geo.enabled", false);
   // user_pref("full-screen-api.enabled", false);
/* 7002: set default permissions
 * Location, Camera, Microphone, Notifications [FF58+] Virtual Reality [FF73+]
 * 0=always ask (default), 1=allow, 2=block
 * [WHY] These are fingerprintable via Permissions API, except VR. Just add site
 * exceptions as allow/block for frequently visited/annoying sites: i.e. not global
 * [SETTING] to add site exceptions: Ctrl+I>Permissions>
 * [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Settings ***/
   // user_pref("permissions.default.geo", 0);
   // user_pref("permissions.default.camera", 0);
   // user_pref("permissions.default.microphone", 0);
   // user_pref("permissions.default.desktop-notification", 0);
   // user_pref("permissions.default.xr", 0); // Virtual Reality
/* 7003: disable non-modern cipher suites [1]
 * [WHY] Passive fingerprinting. Minimal/non-existent threat of downgrade attacks
 * [1] https://browserleaks.com/ssl ***/
   // user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
   // user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
   // user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
   // user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
   // user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // no PFS
   // user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // no PFS
   // user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
   // user_pref("security.ssl3.rsa_aes_256_sha", false); // no PFS
/* 7004: control TLS versions
 * [WHY] Passive fingerprinting and security ***/
   // user_pref("security.tls.version.min", 3); // [DEFAULT: 3]
   // user_pref("security.tls.version.max", 4);
/* 7005: disable SSL session IDs [FF36+]
 * [WHY] Passive fingerprinting and perf costs. These are session-only
 * and isolated with network partitioning (FF85+) and/or containers ***/
   // user_pref("security.ssl.disable_session_identifiers", true);
/* 7006: onions
 * [WHY] Firefox doesn't support hidden services. Use Tor Browser ***/
   // user_pref("dom.securecontext.allowlist_onions", true); // [FF97+] 1382359/1744006
   // user_pref("network.http.referer.hideOnionSource", true); // 1305144
/* 7007: referers
 * [WHY] Only cross-origin referers (1602, 5510) matter ***/
   // user_pref("network.http.sendRefererHeader", 2);
   // user_pref("network.http.referer.trimmingPolicy", 0);
/* 7008: set the default Referrer Policy [FF59+]
 * 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
 * [WHY] Defaults are fine. They can be overridden by a site-controlled Referrer Policy ***/
   // user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 2]
   // user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
/* 7010: disable HTTP Alternative Services [FF37+]
 * [WHY] Already isolated with network partitioning (FF85+) ***/
   // user_pref("network.http.altsvc.enabled", false);
/* 7011: disable website control over browser right-click context menu
 * [WHY] Just use Shift-Right-Click ***/
   // user_pref("dom.event.contextmenu.enabled", false);
/* 7012: disable icon fonts (glyphs) and local fallback rendering
 * [WHY] Breakage, font fallback is equivalency, also RFP
 * [1] https://bugzilla.mozilla.org/789788
 * [2] https://gitlab.torproject.org/legacy/trac/-/issues/8455 ***/
   // user_pref("gfx.downloadable_fonts.enabled", false); // [FF41+]
   // user_pref("gfx.downloadable_fonts.fallback_delay", -1);
/* 7013: disable Clipboard API
 * [WHY] Fingerprintable. Breakage. Cut/copy/paste require user
 * interaction, and paste is limited to focused editable fields ***/
   // user_pref("dom.event.clipboardevents.enabled", false);
/* 7014: disable System Add-on updates
 * [WHY] It can compromise security. System addons ship with prefs, use those ***/
   // user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
   // user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
/* 7015: enable the DNT (Do Not Track) HTTP header
 * [WHY] DNT is enforced with Tracking Protection which is used in ETP Strict (2701) ***/
   // user_pref("privacy.donottrackheader.enabled", true);
/* 7016: customize ETP settings
 * [NOTE] FPP (fingerprintingProtection) is ignored when RFP (4501) is enabled
 * [WHY] Arkenfox only supports strict (2701) which sets these at runtime ***/
   // user_pref("network.cookie.cookieBehavior", 5); // [DEFAULT: 5]
   // user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+]
   // user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
   // user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
   // user_pref("privacy.partition.network_state.ocsp_cache", true);
   // user_pref("privacy.query_stripping.enabled", true); // [FF101+]
   // user_pref("privacy.trackingprotection.enabled", true);
   // user_pref("privacy.trackingprotection.socialtracking.enabled", true);
   // user_pref("privacy.trackingprotection.cryptomining.enabled", true); // [DEFAULT: true]
   // user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // [DEFAULT: true]
/* 7017: disable service workers
 * [WHY] Already isolated with TCP (2701) behind a pref (2710) ***/
   // user_pref("dom.serviceWorkers.enabled", false);
/* 7018: disable Web Notifications [FF22+]
 * [WHY] Web Notifications are behind a prompt (7002)
 * [1] https://blog.mozilla.org/en/products/firefox/block-notification-requests/ ***/
   // user_pref("dom.webnotifications.enabled", false);
/* 7019: disable Push Notifications [FF44+]
 * [WHY] Push requires subscription
 * [NOTE] To remove all subscriptions, reset "dom.push.userAgentID"
 * [1] https://support.mozilla.org/kb/push-notifications-firefox ***/
   // user_pref("dom.push.enabled", false);
/* 7020: disable WebRTC (Web Real-Time Communication)
 * [WHY] Firefox desktop uses mDNS hostname obfuscation and the private IP is never exposed until
 * required in TRUSTED scenarios; i.e. after you grant device (microphone or camera) access
 * [TEST] https://browserleaks.com/webrtc
 * [1] https://groups.google.com/g/discuss-webrtc/c/6stQXi72BEU/m/2FwZd24UAQAJ
 * [2] https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-mdns-ice-candidates#section-3.1.1 ***/
   // user_pref("media.peerconnection.enabled", false);

/*** [SECTION 8000]: DON'T BOTHER: FINGERPRINTING
   [WHY] They are insufficient to help anti-fingerprinting and do more harm than good
   [WARNING] DO NOT USE with RFP. RFP already covers these and they can interfere
***/
user_pref("_user.js.parrot", "8000 syntax error: the parrot's crossed the Jordan");
/* 8001: prefsCleaner: reset items useless for anti-fingerprinting ***/
   // user_pref("browser.display.use_document_fonts", "");
   // user_pref("browser.zoom.siteSpecific", "");
   // user_pref("device.sensors.enabled", "");
   // user_pref("dom.enable_performance", "");
   // user_pref("dom.enable_resource_timing", "");
   // user_pref("dom.gamepad.enabled", "");
   // user_pref("dom.maxHardwareConcurrency", "");
   // user_pref("dom.w3c_touch_events.enabled", "");
   // user_pref("dom.webaudio.enabled", "");
   // user_pref("font.system.whitelist", "");
   // user_pref("general.appname.override", "");
   // user_pref("general.appversion.override", "");
   // user_pref("general.buildID.override", "");
   // user_pref("general.oscpu.override", "");
   // user_pref("general.platform.override", "");
   // user_pref("general.useragent.override", "");
   // user_pref("media.navigator.enabled", "");
   // user_pref("media.ondevicechange.enabled", "");
   // user_pref("media.video_stats.enabled", "");
   // user_pref("media.webspeech.synth.enabled", "");
   // user_pref("ui.use_standins_for_native_colors", "");
   // user_pref("webgl.enable-debug-renderer-info", "");

/*** [SECTION 9000]: NON-PROJECT RELATED ***/
user_pref("_user.js.parrot", "9000 syntax error: the parrot's cashed in 'is chips!");
/* 9001: disable welcome notices ***/
user_pref("browser.startup.homepage_override.mstone", "ignore"); // [HIDDEN PREF]
/* 9002: disable General>Browsing>Recommend extensions/features as you browse [FF67+] ***/
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
/* 9003: disable What's New toolbar icon [FF69+] ***/
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
/* 9004: disable search terms [FF110+]
 * [SETTING] Search>Search Bar>Use the address bar for search and navigation>Show search terms instead of URL... ***/
user_pref("browser.urlbar.showSearchTerms.enabled", false);

/*** [SECTION 9999]: DEPRECATED / RENAMED ***/
user_pref("_user.js.parrot", "9999 syntax error: the parrot's shuffled off 'is mortal coil!");
/* ESR115.x still uses all the following prefs
// [NOTE] replace the * with a slash in the line above to re-enable active ones
// FF116
// 4506: set RFP's font visibility level (1402) [FF94+]
   // [-] https://bugzilla.mozilla.org/1838415
   // user_pref("layout.css.font-visibility.resistFingerprinting", 1); // [DEFAULT: 1]
// FF117
// 1221: disable Windows Microsoft Family Safety cert [FF50+] [WINDOWS]
   // 0=disable detecting Family Safety mode and importing the root
   // 1=only attempt to detect Family Safety mode (don't import the root)
   // 2=detect Family Safety mode and import the root
   // [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/21686
   // [-] https://bugzilla.mozilla.org/1844908
user_pref("security.family_safety.mode", 0);
// 7018: disable service worker Web Notifications [FF44+]
   // [WHY] Web Notifications are behind a prompt (7002)
   // [1] https://blog.mozilla.org/en/products/firefox/block-notification-requests/
   // [-] https://bugzilla.mozilla.org/1842457
   // user_pref("dom.webnotifications.serviceworker.enabled", false);
// FF118
// 1402: limit font visibility (Windows, Mac, some Linux) [FF94+]
   // Uses hardcoded lists with two parts: kBaseFonts + kLangPackFonts [1], bundled fonts are auto-allowed
   // In normal windows: uses the first applicable: RFP over TP over Standard
   // In Private Browsing windows: uses the most restrictive between normal and private
   // 1=only base system fonts, 2=also fonts from optional language packs, 3=also user-installed fonts
   // [1] https://searchfox.org/mozilla-central/search?path=StandardFonts*.inc
   // [-] https://bugzilla.mozilla.org/1847599
   // user_pref("layout.css.font-visibility.private", 1);
   // user_pref("layout.css.font-visibility.standard", 1);
   // user_pref("layout.css.font-visibility.trackingprotection", 1);
// 2623: disable permissions delegation [FF73+]
   // Currently applies to cross-origin geolocation, camera, mic and screen-sharing
   // permissions, and fullscreen requests. Disabling delegation means any prompts
   // for these will show/use their correct 3rd party origin
   // [1] https://groups.google.com/forum/#!topic/mozilla.dev.platform/BdFOMAuCGW8/discussion
   // [-] https://bugzilla.mozilla.org/1697151
   // user_pref("permissions.delegation.enabled", false);
// FF119
// 0211: use en-US locale regardless of the system or region locale
   // [SETUP-WEB] May break some input methods e.g xim/ibus for CJK languages [1]
   // [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=867501,1629630
   // [-] https://bugzilla.mozilla.org/1846224
   // user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
// 0711: disable skipping DoH when parental controls are enabled [FF70+]
   // [-] https://bugzilla.mozilla.org/1586941
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);
// ***/

/* END: internal custom pref to test for syntax errors ***/
user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");

//
/******************************************************************************
 * user.js                                                                    *
 * https://github.com/pyllyukko/user.js                                       *
 ******************************************************************************/

/******************************************************************************
 * SECTION: HTML5 / APIs / DOM                                                *
 ******************************************************************************/

// PREF: Disable Service Workers
// https://developer.mozilla.org/en-US/docs/Web/API/Worker
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
// https://wiki.mozilla.org/Firefox/Push_Notifications#Service_Workers
// NOTICE: Disabling ServiceWorkers breaks functionality on some sites (Google Street View...)
// NOTICE: Disabling ServiceWorkers breaks Firefox Sync
// Unknown security implications
// CVE-2016-5259, CVE-2016-2812, CVE-2016-1949, CVE-2016-5287 (fixed)
user_pref("dom.serviceWorkers.enabled",				false);

// PREF: Disable web notifications
// https://support.mozilla.org/en-US/questions/1140439
user_pref("dom.webnotifications.enabled",			false);

// PREF: Disable DOM timing API
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
// https://www.w3.org/TR/navigation-timing/#privacy
user_pref("dom.enable_performance",				false);

// PREF: Disable resource timing API
// https://www.w3.org/TR/resource-timing/#privacy-security
// NOTICE: Disabling resource timing API breaks some DDoS protection pages (Cloudflare)
user_pref("dom.enable_resource_timing",				false);

// PREF: Make sure the User Timing API does not provide a new high resolution timestamp
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
user_pref("dom.enable_user_timing",				false);

// PREF: Disable Web Audio API
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288359
// NOTICE: Web Audio API is required for Unity web player/games
user_pref("dom.webaudio.enabled",				false);

// PREF: Disable Location-Aware Browsing (geolocation)
// https://www.mozilla.org/en-US/firefox/geolocation/
user_pref("geo.enabled",					false);

// PREF: When geolocation is enabled, use Mozilla geolocation service instead of Google
// https://bugzilla.mozilla.org/show_bug.cgi?id=689252
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// PREF: When geolocation is enabled, don't log geolocation requests to the console
user_pref("geo.wifi.logging.enabled", false);

// PREF: Disable raw TCP socket support (mozTCPSocket)
// https://trac.torproject.org/projects/tor/ticket/18863
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-97/
// https://developer.mozilla.org/docs/Mozilla/B2G_OS/API/TCPSocket
user_pref("dom.mozTCPSocket.enabled",				false);

// PREF: Disable DOM storage (disabled)
// http://kb.mozillazine.org/Dom.storage.enabled
// https://html.spec.whatwg.org/multipage/webstorage.html
// NOTICE-DISABLED: Disabling DOM storage is known to cause`TypeError: localStorage is null` errors
//user_pref("dom.storage.enabled",		false);

// PREF: Disable leaking network/browser connection information via Javascript
// Network Information API provides general information about the system's connection type (WiFi, cellular, etc.)
// https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
// https://wicg.github.io/netinfo/#privacy-considerations
// https://bugzilla.mozilla.org/show_bug.cgi?id=960426
user_pref("dom.netinfo.enabled",				false);

// PREF: Disable network API (Firefox < 32)
// https://developer.mozilla.org/en-US/docs/Web/API/Connection/onchange
// https://www.torproject.org/projects/torbrowser/design/#fingerprinting-defenses
user_pref("dom.network.enabled",				false);

// PREF: Disable WebRTC entirely to prevent leaking internal IP addresses (Firefox < 42)
// NOTICE: Disabling WebRTC breaks peer-to-peer file sharing tools (reep.io ...)
user_pref("media.peerconnection.enabled",			false);

// PREF: Don't reveal your internal IP when WebRTC is enabled (Firefox >= 42)
// https://wiki.mozilla.org/Media/WebRTC/Privacy
// https://github.com/beefproject/beef/wiki/Module%3A-Get-Internal-IP-WebRTC
user_pref("media.peerconnection.ice.default_address_only",	true); // Firefox 42-51
user_pref("media.peerconnection.ice.no_host",			true); // Firefox >= 52

// PREF: Disable WebRTC getUserMedia, screen sharing, audio capture, video capture
// https://wiki.mozilla.org/Media/getUserMedia
// https://blog.mozilla.org/futurereleases/2013/01/12/capture-local-camera-and-microphone-streams-with-getusermedia-now-enabled-in-firefox/
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
user_pref("media.navigator.enabled",				false);
user_pref("media.navigator.video.enabled",			false);
user_pref("media.getusermedia.screensharing.enabled",		false);
user_pref("media.getusermedia.audiocapture.enabled",		false);

// PREF: Disable battery API (Firefox < 52)
// https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
// https://bugzilla.mozilla.org/show_bug.cgi?id=1313580
user_pref("dom.battery.enabled",				false);

// PREF: Disable telephony API
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled",				false);

// PREF: Disable "beacon" asynchronous HTTP transfers (used for analytics)
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled",					false);

// PREF: Disable clipboard event detection (onCut/onCopy/onPaste) via Javascript
// NOTICE: Disabling clipboard events breaks Ctrl+C/X/V copy/cut/paste functionaility in JS-based web applications (Google Docs...)
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
user_pref("dom.event.clipboardevents.enabled",			false);

// PREF: Disable "copy to clipboard" functionality via Javascript (Firefox >= 41)
// NOTICE: Disabling clipboard operations will break legitimate JS-based "copy to clipboard" functionality
// https://hg.mozilla.org/mozilla-central/rev/2f9f8ea4b9c3
user_pref("dom.allow_cut_copy", false);

// PREF: Disable speech recognition
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
// https://wiki.mozilla.org/HTML5_Speech_API
user_pref("media.webspeech.recognition.enable",			false);

// PREF: Disable speech synthesis
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
user_pref("media.webspeech.synth.enabled",			false);

// PREF: Disable sensor API
// https://wiki.mozilla.org/Sensor_API
user_pref("device.sensors.enabled",				false);

// PREF: Disable pinging URIs specified in HTML <a> ping= attributes
// http://kb.mozillazine.org/Browser.send_pings
user_pref("browser.send_pings",					false);

// PREF: When browser pings are enabled, only allow pinging the same host as the origin page
// http://kb.mozillazine.org/Browser.send_pings.require_same_host
user_pref("browser.send_pings.require_same_host",		true);

// PREF: Disable IndexedDB (disabled)
// https://developer.mozilla.org/en-US/docs/IndexedDB
// https://en.wikipedia.org/wiki/Indexed_Database_API
// https://wiki.mozilla.org/Security/Reviews/Firefox4/IndexedDB_Security_Review
// http://forums.mozillazine.org/viewtopic.php?p=13842047
// https://github.com/pyllyukko/user.js/issues/8
// NOTICE-DISABLED: IndexedDB could be used for tracking purposes, but is required for some add-ons to work (notably uBlock), so is left enabled
//user_pref("dom.indexedDB.enabled",		false);

// TODO: "Access Your Location" "Maintain Offline Storage" "Show Notifications"

// PREF: Disable gamepad API to prevent USB device enumeration
// https://www.w3.org/TR/gamepad/
// https://trac.torproject.org/projects/tor/ticket/13023
user_pref("dom.gamepad.enabled",				false);

// PREF: Disable virtual reality devices APIs
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
// https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API
user_pref("dom.vr.enabled",					false);

// PREF: Disable vibrator API
user_pref("dom.vibrator.enabled",           false);

// PREF: Disable Archive API (Firefox < 54)
// https://wiki.mozilla.org/WebAPI/ArchiveAPI
// https://bugzilla.mozilla.org/show_bug.cgi?id=1342361
user_pref("dom.archivereader.enabled",				false);

// PREF: Disable webGL
// https://en.wikipedia.org/wiki/WebGL
// https://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
// NOTICE: Disabling WebGL breaks WebGL-based websites/applications (windy, meteoblue...)
user_pref("webgl.disabled",					true);
// PREF: When webGL is enabled, use the minimum capability mode
user_pref("webgl.min_capability_mode",				true);
// PREF: When webGL is enabled, disable webGL extensions
// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API#WebGL_debugging_and_testing
user_pref("webgl.disable-extensions",				true);
// PREF: When webGL is enabled, force enabling it even when layer acceleration is not supported
// https://trac.torproject.org/projects/tor/ticket/18603
user_pref("webgl.disable-fail-if-major-performance-caveat",	true);
// PREF: When webGL is enabled, do not expose information about the graphics driver
// https://bugzilla.mozilla.org/show_bug.cgi?id=1171228
// https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_renderer_info
user_pref("webgl.enable-debug-renderer-info",			false);
// somewhat related...
//user_pref("pdfjs.enableWebGL",					false);

// PREF: Spoof dual-core CPU
// https://trac.torproject.org/projects/tor/ticket/21675
// https://bugzilla.mozilla.org/show_bug.cgi?id=1360039
user_pref("dom.maxHardwareConcurrency",				2);

// PREF: Disable WebAssembly
// https://webassembly.org/
// https://en.wikipedia.org/wiki/WebAssembly
// https://trac.torproject.org/projects/tor/ticket/21549
// NOTICE: WebAssembly is required for Unity web player/games
user_pref("javascript.options.wasm",				false);

/******************************************************************************
 * SECTION: Misc                                                              *
 ******************************************************************************/

// PREF: Disable face detection
user_pref("camera.control.face_detection.enabled",		false);

// PREF: Disable GeoIP lookup on your address to set default search engine region
// https://trac.torproject.org/projects/tor/ticket/16254
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.countryCode",				"US");
user_pref("browser.search.region",				"US");
user_pref("browser.search.geoip.url",				"");

// PREF: Set Accept-Language HTTP header to en-US regardless of Firefox localization
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
user_pref("intl.accept_languages",				"en-US, en");

// PREF: Don't use OS values to determine locale, force using Firefox locale setting
// http://kb.mozillazine.org/Intl.locale.matchOS
user_pref("intl.locale.matchOS",				false);

// Use LANG environment variable to choose locale (disabled)
//pref("intl.locale.requested", "");

// PREF: Don't use Mozilla-provided location-specific search engines
user_pref("browser.search.geoSpecificDefaults",			false);

// PREF: Do not automatically send selection to clipboard on some Linux platforms
// http://kb.mozillazine.org/Clipboard.autocopy
user_pref("clipboard.autocopy",					false);

// PREF: Prevent leaking application locale/date format using JavaScript
// https://bugzilla.mozilla.org/show_bug.cgi?id=867501
// https://hg.mozilla.org/mozilla-central/rev/52d635f2b33d
user_pref("javascript.use_us_english_locale",			true);

// PREF: Do not submit invalid URIs entered in the address bar to the default search engine
// http://kb.mozillazine.org/Keyword.enabled
user_pref("keyword.enabled",					false);

// PREF: Don't trim HTTP off of URLs in the address bar.
// https://bugzilla.mozilla.org/show_bug.cgi?id=665580
user_pref("browser.urlbar.trimURLs",				false);

// PREF: Don't try to guess domain names when entering an invalid domain name in URL bar
// http://www-archive.mozilla.org/docs/end-user/domain-guessing.html
user_pref("browser.fixup.alternate.enabled",			false);

// PREF: When browser.fixup.alternate.enabled is enabled, strip password from 'user:password@...' URLs
// https://github.com/pyllyukko/user.js/issues/290#issuecomment-303560851
user_pref("browser.fixup.hide_user_pass", true);

// PREF: Send DNS request through SOCKS when SOCKS proxying is in use
// https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers
user_pref("network.proxy.socks_remote_dns",			true);

// PREF: Don't monitor OS online/offline connection state
// https://trac.torproject.org/projects/tor/ticket/18945
user_pref("network.manage-offline-status",			false);

// PREF: Enforce Mixed Active Content Blocking
// https://support.mozilla.org/t5/Protect-your-privacy/Mixed-content-blocking-in-Firefox/ta-p/10990
// https://developer.mozilla.org/en-US/docs/Site_Compatibility_for_Firefox_23#Non-SSL_contents_on_SSL_pages_are_blocked_by_default
// https://blog.mozilla.org/tanvi/2013/04/10/mixed-content-blocking-enabled-in-firefox-23/
user_pref("security.mixed_content.block_active_content",	true);

// PREF: Enforce Mixed Passive Content blocking (a.k.a. Mixed Display Content)
// NOTICE: Enabling Mixed Display Content blocking can prevent images/styles... from loading properly when connection to the website is only partially secured
user_pref("security.mixed_content.block_display_content",	true);

// PREF: Disable JAR from opening Unsafe File Types
// http://kb.mozillazine.org/Network.jar.open-unsafe-types
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.7 
user_pref("network.jar.open-unsafe-types",			false);

// CIS 2.7.4 Disable Scripting of Plugins by JavaScript
// http://forums.mozillazine.org/viewtopic.php?f=7&t=153889
user_pref("security.xpconnect.plugin.unrestricted",		false);

// PREF: Set File URI Origin Policy
// http://kb.mozillazine.org/Security.fileuri.strict_origin_policy
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.8
user_pref("security.fileuri.strict_origin_policy",		true);

// PREF: Disable Displaying Javascript in History URLs
// http://kb.mozillazine.org/Browser.urlbar.filter.javascript
// CIS 2.3.6 
user_pref("browser.urlbar.filter.javascript",			true);

// PREF: Disable asm.js
// http://asmjs.org/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
// https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref("javascript.options.asmjs",				false);

// PREF: Disable SVG in OpenType fonts
// https://wiki.mozilla.org/SVGOpenTypeFonts
// https://github.com/iSECPartners/publications/tree/master/reports/Tor%20Browser%20Bundle
user_pref("gfx.font_rendering.opentype_svg.enabled",		false);

// PREF: Disable in-content SVG rendering (Firefox >= 53) (disabled)
// NOTICE-DISABLED: Disabling SVG support breaks many UI elements on many sites
// https://bugzilla.mozilla.org/show_bug.cgi?id=1216893
// https://github.com/iSECPartners/publications/raw/master/reports/Tor%20Browser%20Bundle/Tor%20Browser%20Bundle%20-%20iSEC%20Deliverable%201.3.pdf#16
//user_pref("svg.disabled", true);

// PREF: Disable video stats to reduce fingerprinting threat
// https://bugzilla.mozilla.org/show_bug.cgi?id=654550
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-100468785
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-148922065
user_pref("media.video_stats.enabled",				false);

// PREF: Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
user_pref("general.buildID.override",				"20100101");
user_pref("browser.startup.homepage_override.buildID",		"20100101");

// PREF: Don't use document specified fonts to prevent installed font enumeration (fingerprinting)
// https://github.com/pyllyukko/user.js/issues/395
// https://browserleaks.com/fonts
// https://github.com/pyllyukko/user.js/issues/120
user_pref("browser.display.use_document_fonts",			0);

// PREF: Enable only whitelisted URL protocol handlers
// http://kb.mozillazine.org/Network.protocol-handler.external-default
// http://kb.mozillazine.org/Network.protocol-handler.warn-external-default
// http://kb.mozillazine.org/Network.protocol-handler.expose.%28protocol%29
// https://news.ycombinator.com/item?id=13047883
// https://bugzilla.mozilla.org/show_bug.cgi?id=167475
// https://github.com/pyllyukko/user.js/pull/285#issuecomment-298124005
// NOTICE: Disabling nonessential protocols breaks all interaction with custom protocols such as mailto:, irc:, magnet: ... and breaks opening third-party mail/messaging/torrent/... clients when clicking on links with these protocols
// TODO: Add externally-handled protocols from Windows 8.1 and Windows 10 (currently contains protocols only from Linux and Windows 7) that might pose a similar threat (see e.g. https://news.ycombinator.com/item?id=13044991)
// TODO: Add externally-handled protocols from Mac OS X that might pose a similar threat (see e.g. https://news.ycombinator.com/item?id=13044991)
// If you want to enable a protocol, set network.protocol-handler.expose.(protocol) to true and network.protocol-handler.external.(protocol) to:
//   * true, if the protocol should be handled by an external application
//   * false, if the protocol should be handled internally by Firefox
user_pref("network.protocol-handler.warn-external-default",	true);
user_pref("network.protocol-handler.external.http",		false);
user_pref("network.protocol-handler.external.https",		false);
user_pref("network.protocol-handler.external.javascript",	false);
user_pref("network.protocol-handler.external.moz-extension",	false);
user_pref("network.protocol-handler.external.ftp",		false);
user_pref("network.protocol-handler.external.file",		false);
user_pref("network.protocol-handler.external.about",		false);
user_pref("network.protocol-handler.external.chrome",		false);
user_pref("network.protocol-handler.external.blob",		false);
user_pref("network.protocol-handler.external.data",		false);
user_pref("network.protocol-handler.expose-all",		false);
user_pref("network.protocol-handler.expose.http",		true);
user_pref("network.protocol-handler.expose.https",		true);
user_pref("network.protocol-handler.expose.javascript",		true);
user_pref("network.protocol-handler.expose.moz-extension",	true);
user_pref("network.protocol-handler.expose.ftp",		true);
user_pref("network.protocol-handler.expose.file",		true);
user_pref("network.protocol-handler.expose.about",		true);
user_pref("network.protocol-handler.expose.chrome",		true);
user_pref("network.protocol-handler.expose.blob",		true);
user_pref("network.protocol-handler.expose.data",		true);

/******************************************************************************
 * SECTION: Extensions / plugins                                                       *
 ******************************************************************************/

// PREF: Ensure you have a security delay when installing add-ons (milliseconds)
// http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
// http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
user_pref("security.dialog_enable_delay",			1000);

// PREF: Require signatures
// https://wiki.mozilla.org/Addons/Extension_Signing
//user_pref("xpinstall.signatures.required",		true);

// PREF: Opt-out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled",			false);

// PREF: Opt-out of themes (Persona) updates
// https://support.mozilla.org/t5/Firefox/how-do-I-prevent-autoamtic-updates-in-a-50-user-environment/td-p/144287
user_pref("lightweightThemes.update.enabled",			false);

// PREF: Disable Flash Player NPAPI plugin
// http://kb.mozillazine.org/Flash_plugin
user_pref("plugin.state.flash",					0);

// PREF: Disable Java NPAPI plugin
user_pref("plugin.state.java",					0);

// PREF: Disable sending Flash Player crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",	false);

// PREF: When Flash crash reports are enabled, don't send the visited URL in the crash report
user_pref("dom.ipc.plugins.reportCrashURL",			false);

// PREF: When Flash is enabled, download and use Mozilla SWF URIs blocklist
// https://bugzilla.mozilla.org/show_bug.cgi?id=1237198
// https://github.com/mozilla-services/shavar-plugin-blocklist
user_pref("browser.safebrowsing.blockedURIs.enabled", true);

// PREF: Disable Gnome Shell Integration NPAPI plugin
user_pref("plugin.state.libgnome-shell-browser-plugin",		0);

// PREF: Disable the bundled OpenH264 video codec (disabled)
// http://forums.mozillazine.org/viewtopic.php?p=13845077&sid=28af2622e8bd8497b9113851676846b1#p13845077
//user_pref("media.gmp-provider.enabled",		false);

// PREF: Enable plugins click-to-play
// https://wiki.mozilla.org/Firefox/Click_To_Play
// https://blog.mozilla.org/security/2012/10/11/click-to-play-plugins-blocklist-style/
user_pref("plugins.click_to_play",				true);

// PREF: Updates addons automatically
// https://blog.mozilla.org/addons/how-to-turn-off-add-on-updates/
user_pref("extensions.update.enabled",				true);

// PREF: Enable add-on and certificate blocklists (OneCRL) from Mozilla
// https://wiki.mozilla.org/Blocklisting
// https://blocked.cdn.mozilla.net/
// http://kb.mozillazine.org/Extensions.blocklist.enabled
// http://kb.mozillazine.org/Extensions.blocklist.url
// https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
// Updated at interval defined in extensions.blocklist.interval (default: 86400)
user_pref("extensions.blocklist.enabled",			true);
user_pref("services.blocklist.update_enabled",			true);

// PREF: Decrease system information leakage to Mozilla blocklist update servers
// https://trac.torproject.org/projects/tor/ticket/16931
user_pref("extensions.blocklist.url",				"https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");

// PREF: Disable system add-on updates (hidden & always-enabled add-ons from Mozilla)
// https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/SystemAddons.html
// https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/
// https://github.com/pyllyukko/user.js/issues/419
// https://dxr.mozilla.org/mozilla-central/source/toolkit/mozapps/extensions/AddonManager.jsm#1248-1257
// NOTICE: Disabling system add-on updates prevents Mozilla from "hotfixing" your browser to patch critical problems (one possible use case from the documentation)
user_pref("extensions.systemAddon.update.enabled",		false);

/******************************************************************************
 * SECTION: Firefox (anti-)features / components                              *                            *
 ******************************************************************************/

// PREF: Disable Extension recommendations (Firefox >= 65)
// https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr",	false);

// PREF: Trusted Recursive Resolver (DNS-over-HTTPS) (disabled)
// https://wiki.mozilla.org/Trusted_Recursive_Resolver
//user_pref("network.trr.mode",					0);

// PREF: Disable WebIDE
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
user_pref("devtools.webide.enabled",				false);
user_pref("devtools.webide.autoinstallADBHelper",		false);
user_pref("devtools.webide.autoinstallFxdtAdapters",		false);

// PREF: Disable remote debugging
// https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_Desktop
// https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Advanced_settings
user_pref("devtools.debugger.remote-enabled",			false);
user_pref("devtools.chrome.enabled",				false);
user_pref("devtools.debugger.force-local",			true);

// PREF: Disable Mozilla telemetry/experiments
// https://wiki.mozilla.org/Platform/Features/Telemetry
// https://wiki.mozilla.org/Privacy/Reviews/Telemetry
// https://wiki.mozilla.org/Telemetry
// https://www.mozilla.org/en-US/legal/privacy/firefox.html#telemetry
// https://support.mozilla.org/t5/Firefox-crashes/Mozilla-Crash-Reporter/ta-p/1715
// https://wiki.mozilla.org/Security/Reviews/Firefox6/ReviewNotes/telemetry
// https://gecko.readthedocs.io/en/latest/browser/experiments/experiments/manifest.html
// https://wiki.mozilla.org/Telemetry/Experiments
// https://support.mozilla.org/en-US/questions/1197144
// https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html#id1
user_pref("toolkit.telemetry.enabled",				false);
user_pref("toolkit.telemetry.unified",				false);
user_pref("toolkit.telemetry.archive.enabled",			false);
user_pref("experiments.supported",				false);
user_pref("experiments.enabled",				false);
user_pref("experiments.manifest.uri",				"");

// PREF: Disallow Necko to do A/B testing
// https://trac.torproject.org/projects/tor/ticket/13170
user_pref("network.allow-experiments",				false);

// PREF: Disable sending Firefox crash reports to Mozilla servers
// https://wiki.mozilla.org/Breakpad
// http://kb.mozillazine.org/Breakpad
// https://dxr.mozilla.org/mozilla-central/source/toolkit/crashreporter
// https://bugzilla.mozilla.org/show_bug.cgi?id=411490
// A list of submitted crash reports can be found at about:crashes
user_pref("breakpad.reportURL",					"");

// PREF: Disable sending reports of tab crashes to Mozilla (about:tabcrashed), don't nag user about unsent crash reports
// https://hg.mozilla.org/mozilla-central/file/tip/browser/app/profile/firefox.js
user_pref("browser.tabs.crashReporting.sendReport",		false);
user_pref("browser.crashReports.unsubmittedCheck.enabled",	false);

// PREF: Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
// https://wiki.mozilla.org/FlyWeb
// https://wiki.mozilla.org/FlyWeb/Security_scenarios
// https://docs.google.com/document/d/1eqLb6cGjDL9XooSYEEo7mE-zKQ-o-AuDTcEyNhfBMBM/edit
// http://www.ghacks.net/2016/07/26/firefox-flyweb
user_pref("dom.flyweb.enabled",					false);

// PREF: Disable the UITour backend
// https://trac.torproject.org/projects/tor/ticket/19047#comment:3
user_pref("browser.uitour.enabled",				false);

// PREF: Enable Firefox Tracking Protection
// https://wiki.mozilla.org/Security/Tracking_protection
// https://support.mozilla.org/en-US/kb/tracking-protection-firefox
// https://support.mozilla.org/en-US/kb/tracking-protection-pbm
// https://kontaxis.github.io/trackingprotectionfirefox/
// https://feeding.cloud.geek.nz/posts/how-tracking-protection-works-in-firefox/
user_pref("privacy.trackingprotection.enabled",			true);
user_pref("privacy.trackingprotection.pbmode.enabled",		true);

// PREF: Enable contextual identity Containers feature (Firefox >= 52)
// NOTICE: Containers are not available in Private Browsing mode
// https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers
user_pref("privacy.userContext.enabled",			true);

// PREF: Enable Firefox's anti-fingerprinting mode ("resist fingerprinting" or RFP) (Tor Uplift project)
// https://wiki.mozilla.org/Security/Tor_Uplift/Tracking
// https://bugzilla.mozilla.org/show_bug.cgi?id=1333933
// https://wiki.mozilla.org/Security/Fingerprinting
// NOTICE: RFP breaks some keyboard shortcuts used in certain websites (see #443)
// NOTICE: RFP changes your time zone
// NOTICE: RFP breaks some DDoS protection pages (Cloudflare)
user_pref("privacy.resistFingerprinting",			true);

// PREF: disable mozAddonManager Web API [FF57+]
// https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330
// https://bugzilla.mozilla.org/buglist.cgi?bug_id=1406795
// https://bugzilla.mozilla.org/buglist.cgi?bug_id=1415644
// https://bugzilla.mozilla.org/buglist.cgi?bug_id=1453988
// https://trac.torproject.org/projects/tor/ticket/26114
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("extensions.webextensions.restrictedDomains", "");

// PREF: enable RFP letterboxing / resizing of inner window [FF67+] (disabled)
// https://bugzilla.mozilla.org/1407366
//user_pref("privacy.resistFingerprinting.letterboxing", true);
//user_pref("privacy.resistFingerprinting.letterboxing.dimensions", "800x600, 1000x1000, 1600x900");

// PREF: disable showing about:blank/maximized window as soon as possible during startup [FF60+]
// https://bugzilla.mozilla.org/1448423
user_pref("browser.startup.blankWindow", false);

// PREF: Disable the built-in PDF viewer
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2743
// https://blog.mozilla.org/security/2015/08/06/firefox-exploit-found-in-the-wild/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-69/
user_pref("pdfjs.disabled",					true);

// PREF: Disable collection/sending of the health report (healthreport.sqlite*)
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("datareporting.healthreport.uploadEnabled",		false);
user_pref("datareporting.healthreport.service.enabled",		false);
user_pref("datareporting.policy.dataSubmissionEnabled",		false);
// "Allow Firefox to make personalized extension recommendations"
user_pref("browser.discovery.enabled",				false);

// PREF: Disable Shield/Heartbeat/Normandy (Mozilla user rating telemetry)
// https://wiki.mozilla.org/Advocacy/heartbeat
// https://trac.torproject.org/projects/tor/ticket/19047
// https://trac.torproject.org/projects/tor/ticket/18738
// https://wiki.mozilla.org/Firefox/Shield
// https://github.com/mozilla/normandy
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
// https://wiki.mozilla.org/Firefox/Normandy/PreferenceRollout
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("extensions.shield-recipe-client.enabled",		false);
user_pref("app.shield.optoutstudies.enabled",			false);


// PREF: Disable Firefox Hello (disabled) (Firefox < 49)
// https://wiki.mozilla.org/Loop
// https://support.mozilla.org/t5/Chat-and-share/Support-for-Hello-discontinued-in-Firefox-49/ta-p/37946
// NOTICE-DISABLED: Firefox Hello requires setting `media.peerconnection.enabled` and `media.getusermedia.screensharing.enabled` to true, `security.OCSP.require` to false to work.
//user_pref("loop.enabled",		false);

// PREF: Disable Firefox Hello metrics collection
// https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
user_pref("loop.logDomains",					false);

// PREF: Enable Auto Update (disabled)
// NOTICE: Fully automatic updates are disabled and left to package management systems on Linux. Windows users may want to change this setting.
// CIS 2.1.1
//user_pref("app.update.auto",					true);

// PREF: Enforce checking for Firefox updates
// http://kb.mozillazine.org/App.update.enabled
// NOTICE: Update check page might incorrectly report Firefox ESR as out-of-date
user_pref("app.update.enabled",                 true);

// PREF: Enable blocking reported web forgeries
// https://wiki.mozilla.org/Security/Safe_Browsing
// http://kb.mozillazine.org/Safe_browsing
// https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
// http://forums.mozillazine.org/viewtopic.php?f=39&t=2711237&p=12896849#p12896849
// CIS 2.3.4
user_pref("browser.safebrowsing.enabled",			true); // Firefox < 50
user_pref("browser.safebrowsing.phishing.enabled",		true); // firefox >= 50

// PREF: Enable blocking reported attack sites
// http://kb.mozillazine.org/Browser.safebrowsing.malware.enabled
// CIS 2.3.5
user_pref("browser.safebrowsing.malware.enabled",		true);

// PREF: Disable querying Google Application Reputation database for downloaded binary files
// https://www.mozilla.org/en-US/firefox/39.0/releasenotes/
// https://wiki.mozilla.org/Security/Application_Reputation
user_pref("browser.safebrowsing.downloads.remote.enabled",	false);

// PREF: Disable Pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
// https://github.com/pyllyukko/user.js/issues/143
user_pref("browser.pocket.enabled",				false);
user_pref("extensions.pocket.enabled",				false);

// PREF: Disable "Recommended by Pocket" in Firefox Quantum
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories",	false);

/******************************************************************************
 * SECTION: Automatic connections                                             *
 ******************************************************************************/

// PREF: Limit the connection keep-alive timeout to 15 seconds (disabled)
// https://github.com/pyllyukko/user.js/issues/387
// http://kb.mozillazine.org/Network.http.keep-alive.timeout
// https://httpd.apache.org/docs/current/mod/core.html#keepalivetimeout
//user_pref("network.http.keep-alive.timeout",			15);

// PREF: Disable prefetching of <link rel="next"> URLs
// http://kb.mozillazine.org/Network.prefetch-next
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Is_there_a_preference_to_disable_link_prefetching.3F
user_pref("network.prefetch-next",				false);

// PREF: Disable DNS prefetching
// http://kb.mozillazine.org/Network.dns.disablePrefetch
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch",			true);
user_pref("network.dns.disablePrefetchFromHTTPS",		true);

// PREF: Disable the predictive service (Necko)
// https://wiki.mozilla.org/Privacy/Reviews/Necko
user_pref("network.predictor.enabled",				false);

// PREF: Reject .onion hostnames before passing the to DNS
// https://bugzilla.mozilla.org/show_bug.cgi?id=1228457
// RFC 7686
user_pref("network.dns.blockDotOnion",				true);

// PREF: Disable search suggestions in the search bar
// http://kb.mozillazine.org/Browser.search.suggest.enabled
user_pref("browser.search.suggest.enabled",			false);

// PREF: Disable "Show search suggestions in location bar results"
user_pref("browser.urlbar.suggest.searches",			false);
// PREF: When using the location bar, don't suggest URLs from browsing history
user_pref("browser.urlbar.suggest.history",			false);
// PREF: Disable Firefox Suggest
// https://www.ghacks.net/2021/09/09/how-to-disable-firefox-suggest/
// https://support.mozilla.org/en-US/kb/navigate-web-faster-firefox-suggest
user_pref("browser.urlbar.groupLabels.enabled", false); // Firefox >= 93

// PREF: Disable SSDP
// https://bugzilla.mozilla.org/show_bug.cgi?id=1111967
user_pref("browser.casting.enabled",				false);

// PREF: Disable automatic downloading of OpenH264 codec
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_media-capabilities
// https://andreasgal.com/2014/10/14/openh264-now-in-firefox/
user_pref("media.gmp-gmpopenh264.enabled",			false);
user_pref("media.gmp-manager.url",				"");

// PREF: Disable speculative pre-connections
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections
// https://bugzilla.mozilla.org/show_bug.cgi?id=814169
user_pref("network.http.speculative-parallel-limit",		0);

// PREF: Disable downloading homepage snippets/messages from Mozilla
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
// https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
user_pref("browser.aboutHomeSnippets.updateUrl",		"");

// PREF: Never check updates for search engines
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
user_pref("browser.search.update",				false);

// PREF: Disable automatic captive portal detection (Firefox >= 52.0)
// https://support.mozilla.org/en-US/questions/1157121
user_pref("network.captive-portal-service.enabled",		false);

// PREF: Disable (parts of?) "TopSites"
user_pref("browser.topsites.contile.enabled",				false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites",		false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites",	false);

/******************************************************************************
 * SECTION: HTTP                                                              *
 ******************************************************************************/

// PREF: Disallow NTLMv1
// https://bugzilla.mozilla.org/show_bug.cgi?id=828183
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1",	false);
// it is still allowed through HTTPS. uncomment the following to disable it completely.
//user_pref("network.negotiate-auth.allow-insecure-ntlm-v1-https",		false);

// PREF: Enable CSP 1.1 script-nonce directive support
// https://bugzilla.mozilla.org/show_bug.cgi?id=855326
user_pref("security.csp.experimentalEnabled",			true);

// PREF: Enable Content Security Policy (CSP)
// https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
user_pref("security.csp.enable",				true);

// PREF: Enable Subresource Integrity
// https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
// https://wiki.mozilla.org/Security/Subresource_Integrity
user_pref("security.sri.enable",				true);

// PREF: DNT HTTP header (disabled)
// https://www.mozilla.org/en-US/firefox/dnt/
// https://en.wikipedia.org/wiki/Do_not_track_header
// https://dnt-dashboard.mozilla.org
// https://github.com/pyllyukko/user.js/issues/11
// NOTICE: Do No Track must be enabled manually
//user_pref("privacy.donottrackheader.enabled",		true);

// PREF: Send a referer header with the target URI as the source (disabled)
// https://bugzilla.mozilla.org/show_bug.cgi?id=822869
// https://github.com/pyllyukko/user.js/issues/227
// NOTICE-DISABLED: Spoofing referers breaks functionality on websites relying on authentic referer headers
// NOTICE-DISABLED: Spoofing referers breaks visualisation of 3rd-party sites on the Lightbeam addon
// NOTICE-DISABLED: Spoofing referers disables CSRF protection on some login pages not implementing origin-header/cookie+token based CSRF protection
// TODO: https://github.com/pyllyukko/user.js/issues/94, commented-out XOriginPolicy/XOriginTrimmingPolicy = 2 prefs
//user_pref("network.http.referer.spoofSource",			true);

// PREF: Don't send referer headers when following links across different domains
// https://github.com/pyllyukko/user.js/issues/227
// https://github.com/pyllyukko/user.js/issues/328
// https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/
user_pref("network.http.referer.XOriginPolicy",		2);

// PREF: Accept Only 1st Party Cookies
// http://kb.mozillazine.org/Network.cookie.cookieBehavior#1
// NOTICE: Blocking 3rd-party cookies breaks a number of payment gateways
// CIS 2.5.1
user_pref("network.cookie.cookieBehavior",			1);

// PREF: Enable first-party isolation
// https://bugzilla.mozilla.org/show_bug.cgi?id=1299996
// https://bugzilla.mozilla.org/show_bug.cgi?id=1260931
// https://wiki.mozilla.org/Security/FirstPartyIsolation
// NOTICE: First-party isolation breaks Microsoft Teams
// NOTICE: First-party isolation causes HTTP basic auth to ask for credentials for every new tab (see #425)
user_pref("privacy.firstparty.isolate",				true);

// PREF: Make sure that third-party cookies (if enabled) never persist beyond the session.
// https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
// http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly
// https://developer.mozilla.org/en-US/docs/Cookies_Preferences_in_Mozilla#network.cookie.thirdparty.sessionOnly
user_pref("network.cookie.thirdparty.sessionOnly",		true);

// PREF: Spoof User-agent (disabled)
//user_pref("general.useragent.override",				"Mozilla/5.0 (Windows NT 6.1; rv:45.0) Gecko/20100101 Firefox/45.0");
//user_pref("general.appname.override",				"Netscape");
//user_pref("general.appversion.override",			"5.0 (Windows)");
//user_pref("general.platform.override",				"Win32");
//user_pref("general.oscpu.override",				"Windows NT 6.1");

/*******************************************************************************
 * SECTION: Caching                                                            *
 ******************************************************************************/

// PREF: Permanently enable private browsing mode
// https://support.mozilla.org/en-US/kb/Private-Browsing
// https://wiki.mozilla.org/PrivateBrowsing
// NOTICE: You can not view or inspect cookies when in private browsing: https://bugzilla.mozilla.org/show_bug.cgi?id=823941
// NOTICE: When Javascript is enabled, Websites can detect use of Private Browsing mode
// NOTICE: Private browsing breaks Kerberos authentication
// NOTICE: Disables "Containers" functionality (see below)
// NOTICE: "Always use private browsing mode" (browser.privatebrowsing.autostart) disables the possibility to use password manager: https://support.mozilla.org/en-US/kb/usernames-and-passwords-are-not-saved#w_private-browsing
user_pref("browser.privatebrowsing.autostart",			true);

// PREF: Do not download URLs for the offline cache
// http://kb.mozillazine.org/Browser.cache.offline.enable
user_pref("browser.cache.offline.enable",			false);

// PREF: Clear history when Firefox closes
// https://support.mozilla.org/en-US/kb/Clear%20Recent%20History#w_how-do-i-make-firefox-clear-my-history-automatically
// NOTICE: Installing user.js will remove your browsing history, caches and local storage.
// NOTICE: Installing user.js **will remove your saved passwords** (https://github.com/pyllyukko/user.js/issues/27)
// NOTICE: Clearing open windows on Firefox exit causes 2 windows to open when Firefox starts https://bugzilla.mozilla.org/show_bug.cgi?id=1334945
user_pref("privacy.sanitize.sanitizeOnShutdown",		true);
user_pref("privacy.clearOnShutdown.cache",			true);
user_pref("privacy.clearOnShutdown.cookies",			true);
user_pref("privacy.clearOnShutdown.downloads",			true);
user_pref("privacy.clearOnShutdown.formdata",			true);
user_pref("privacy.clearOnShutdown.history",			true);
user_pref("privacy.clearOnShutdown.offlineApps",		true);
user_pref("privacy.clearOnShutdown.sessions",			true);
user_pref("privacy.clearOnShutdown.openWindows",		true);

// PREF: Set time range to "Everything" as default in "Clear Recent History"
user_pref("privacy.sanitize.timeSpan",				0);

// PREF: Clear everything but "Site Preferences" in "Clear Recent History"
user_pref("privacy.cpd.offlineApps",				true);
user_pref("privacy.cpd.cache",					true);
user_pref("privacy.cpd.cookies",				true);
user_pref("privacy.cpd.downloads",				true);
user_pref("privacy.cpd.formdata",				true);
user_pref("privacy.cpd.history",				true);
user_pref("privacy.cpd.sessions",				true);

// PREF: Don't remember browsing history
user_pref("places.history.enabled",				false);

// PREF: Disable disk cache
// http://kb.mozillazine.org/Browser.cache.disk.enable
user_pref("browser.cache.disk.enable",				false);

// PREF: Disable memory cache (disabled)
// http://kb.mozillazine.org/Browser.cache.memory.enable
//user_pref("browser.cache.memory.enable",		false);

// PREF: Disable Caching of SSL Pages
// CIS Version 1.2.0 October 21st, 2011 2.5.8
// http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.cache.disk_cache_ssl",			false);

// PREF: Disable download history
// CIS Version 1.2.0 October 21st, 2011 2.5.5
user_pref("browser.download.manager.retention",			0);

// PREF: Disable password manager (use an external password manager!)
// CIS Version 1.2.0 October 21st, 2011 2.5.2
user_pref("signon.rememberSignons",				false);

// PREF: Disable form autofill, don't save information entered in web page forms and the Search Bar
user_pref("browser.formfill.enable",				false);

// PREF: Cookies expires at the end of the session (when the browser closes)
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy#2
user_pref("network.cookie.lifetimePolicy",			2);

// PREF: Require manual intervention to autofill known username/passwords sign-in forms
// http://kb.mozillazine.org/Signon.autofillForms
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability
user_pref("signon.autofillForms",				false);

// PREF: Disable formless login capture
// https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
user_pref("signon.formlessCapture.enabled",			false);

// PREF: When username/password autofill is enabled, still disable it on non-HTTPS sites
// https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317
user_pref("signon.autofillForms.http",				false);

// PREF: Show in-content login form warning UI for insecure login fields
// https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317
user_pref("security.insecure_field_warning.contextual.enabled", true);

// PREF: Disable the password manager for pages with autocomplete=off (disabled)
// https://bugzilla.mozilla.org/show_bug.cgi?id=956906
// OWASP ASVS V9.1
// Does not prevent any kind of auto-completion (see browser.formfill.enable, signon.autofillForms)
//user_pref("signon.storeWhenAutocompleteOff",			false);

// PREF: Delete Search and Form History
// CIS Version 1.2.0 October 21st, 2011 2.5.6
user_pref("browser.formfill.expire_days",			0);

// PREF: Clear SSL Form Session Data
// http://kb.mozillazine.org/Browser.sessionstore.privacy_level#2
// Store extra session data for unencrypted (non-HTTPS) sites only.
// CIS Version 1.2.0 October 21st, 2011 2.5.7
// NOTE: CIS says 1, we use 2
user_pref("browser.sessionstore.privacy_level",			2);

// PREF: Delete temporary files on exit
// https://bugzilla.mozilla.org/show_bug.cgi?id=238789
user_pref("browser.helperApps.deleteTempFileOnExit",		true);

// PREF: Do not create screenshots of visited pages (relates to the "new tab page" feature)
// https://support.mozilla.org/en-US/questions/973320
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.pagethumbnails.capturing_disabled
user_pref("browser.pagethumbnails.capturing_disabled",		true);

// PREF: Don't fetch and permanently store favicons for Windows .URL shortcuts created by drag and drop
// NOTICE: .URL shortcut files will be created with a generic icon
// Favicons are stored as .ico files in $profile_dir\shortcutCache
user_pref("browser.shell.shortcutFavicons",					false);

// PREF: Disable bookmarks backups (default: 15)
// http://kb.mozillazine.org/Browser.bookmarks.max_backups
user_pref("browser.bookmarks.max_backups", 0);

// PREF: Export bookmarks to HTML automatically when closing Firefox (disabled)
// https://support.mozilla.org/en-US/questions/1176242
//user_pref("browser.bookmarks.autoExportHTML", 				true);
//user_pref("browser.bookmarks.file",	'/path/to/bookmarks-export.html');

// PREF: Disable downloading of favicons in response to favicon fingerprinting techniques
// https://github.com/jonasstrehle/supercookie
// http://kb.mozillazine.org/Browser.chrome.site_icons
// https://blog.mozilla.org/security/2021/01/26/supercookie-protections/
user_pref("browser.chrome.site_icons",				false);

/*******************************************************************************
 * SECTION: UI related                                                         *
 *******************************************************************************/

// PREF: Enable insecure password warnings (login forms in non-HTTPS pages)
// https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1319119
// https://bugzilla.mozilla.org/show_bug.cgi?id=1217156
user_pref("security.insecure_password.ui.enabled",		true);

// PREF: Disable right-click menu manipulation via JavaScript (disabled)
//user_pref("dom.event.contextmenu.enabled",		false);

// PREF: Disable "Are you sure you want to leave this page?" popups on page close
// https://support.mozilla.org/en-US/questions/1043508
// NOTICE: disabling "beforeunload" events may lead to losing data entered in web forms
// Does not prevent JS leaks of the page close event.
// https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
//user_pref("dom.disable_beforeunload",    true);

// PREF: Disable Downloading on Desktop
// CIS 2.3.2
user_pref("browser.download.folderList",			2);

// PREF: Always ask the user where to download
// https://developer.mozilla.org/en/Download_Manager_preferences (obsolete)
user_pref("browser.download.useDownloadDir",			false);

// PREF: Disable the "new tab page" feature and show a blank tab instead
// https://wiki.mozilla.org/Privacy/Reviews/New_Tab
// https://support.mozilla.org/en-US/kb/new-tab-page-show-hide-and-customize-top-sites#w_how-do-i-turn-the-new-tab-page-off
user_pref("browser.newtabpage.enabled",				false);
user_pref("browser.newtab.url",					"about:blank");

// PREF: Disable Snippets
// https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
// https://support.mozilla.org/en-US/kb/snippets-firefox-faq
user_pref("browser.newtabpage.activity-stream.feeds.snippets",	false);

// PREF: Disable Activity Stream
// https://wiki.mozilla.org/Firefox/Activity_Stream
user_pref("browser.newtabpage.activity-stream.enabled",		false);

// PREF: Disable new tab tile ads & preload
// http://www.thewindowsclub.com/disable-remove-ad-tiles-from-firefox
// http://forums.mozillazine.org/viewtopic.php?p=13876331#p13876331
// https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
// TODO: deprecated? not in DXR, some dead links
user_pref("browser.newtabpage.enhanced",			false);
user_pref("browser.newtab.preload",				false);
user_pref("browser.newtabpage.directory.ping",			"");
user_pref("browser.newtabpage.directory.source",		"data:text/plain,{}");

// PREF: Disable Mozilla VPN ads on the about:protections page
// https://support.mozilla.org/en-US/kb/what-mozilla-vpn-and-how-does-it-work
// https://en.wikipedia.org/wiki/Mozilla_VPN
// https://blog.mozilla.org/security/2021/08/31/mozilla-vpn-security-audit/
// https://www.mozilla.org/en-US/security/advisories/mfsa2021-31/
user_pref("browser.vpn_promo.enabled",			false);

// PREF: Enable Auto Notification of Outdated Plugins (Firefox < 50)
// https://wiki.mozilla.org/Firefox3.6/Plugin_Update_Awareness_Security_Review
// CIS Version 1.2.0 October 21st, 2011 2.1.2
// https://hg.mozilla.org/mozilla-central/rev/304560
user_pref("plugins.update.notifyUser",				true);

// PREF: Force Punycode for Internationalized Domain Names
// http://kb.mozillazine.org/Network.IDN_show_punycode
// https://www.xudongz.com/blog/2017/idn-phishing/
// https://wiki.mozilla.org/IDN_Display_Algorithm
// https://en.wikipedia.org/wiki/IDN_homograph_attack
// https://www.mozilla.org/en-US/security/advisories/mfsa2017-02/
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.6
user_pref("network.IDN_show_punycode",				true);

// PREF: Disable inline autocomplete in URL bar
// http://kb.mozillazine.org/Inline_autocomplete
user_pref("browser.urlbar.autoFill",				false);
user_pref("browser.urlbar.autoFill.typed",			false);

// PREF: Disable CSS :visited selectors
// https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/
// https://dbaron.org/mozilla/visited-privacy
user_pref("layout.css.visited_links_enabled",			false);

// PREF: Disable URL bar autocomplete and history/bookmarks suggestions dropdown
// http://kb.mozillazine.org/Disabling_autocomplete_-_Firefox#Firefox_3.5
user_pref("browser.urlbar.autocomplete.enabled",		false);

// PREF: Do not check if Firefox is the default browser
user_pref("browser.shell.checkDefaultBrowser",			false);

// PREF: When password manager is enabled, lock the password storage periodically
// CIS Version 1.2.0 October 21st, 2011 2.5.3 Disable Prompting for Credential Storage
user_pref("security.ask_for_password",				2);

// PREF: Lock the password storage every 1 minutes (default: 30)
user_pref("security.password_lifetime",				1);

// PREF: Display a notification bar when websites offer data for offline use
// http://kb.mozillazine.org/Browser.offline-apps.notify
user_pref("browser.offline-apps.notify",			true);

/******************************************************************************
 * SECTION: Cryptography                                                      *
 ******************************************************************************/

// PREF: Enable HTTPS-Only Mode
// https://blog.mozilla.org/security/2020/11/17/firefox-83-introduces-https-only-mode/
// https://www.feistyduck.com/bulletproof-tls-newsletter/issue_71_firefox_introduces_https_only_mode
user_pref("dom.security.https_only_mode",			true);

// PREF: Enable HSTS preload list (pre-set HSTS sites list provided by Mozilla)
// https://blog.mozilla.org/security/2012/11/01/preloading-hsts/
// https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List
// https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
user_pref("network.stricttransportsecurity.preloadlist",	true);

// PREF: Enable Online Certificate Status Protocol
// https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol
// https://www.imperialviolet.org/2014/04/19/revchecking.html
// https://www.maikel.pro/blog/current-state-certificate-revocation-crls-ocsp/
// https://wiki.mozilla.org/CA:RevocationPlan
// https://wiki.mozilla.org/CA:ImprovingRevocation
// https://wiki.mozilla.org/CA:OCSP-HardFail
// https://news.netcraft.com/archives/2014/04/24/certificate-revocation-why-browsers-remain-affected-by-heartbleed.html
// https://news.netcraft.com/archives/2013/04/16/certificate-revocation-and-the-performance-of-ocsp.html
// NOTICE: OCSP leaks your IP and domains you visit to the CA when OCSP Stapling is not available on visited host
// NOTICE: OCSP is vulnerable to replay attacks when nonce is not configured on the OCSP responder
// NOTICE: OCSP adds latency (performance)
// NOTICE: Short-lived certificates are not checked for revocation (security.pki.cert_short_lifetime_in_days, default:10)
// CIS Version 1.2.0 October 21st, 2011 2.2.4
user_pref("security.OCSP.enabled",				1);

// PREF: Enable OCSP Stapling support
// https://en.wikipedia.org/wiki/OCSP_stapling
// https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
// https://www.digitalocean.com/community/tutorials/how-to-configure-ocsp-stapling-on-apache-and-nginx
user_pref("security.ssl.enable_ocsp_stapling",			true);

// PREF: Enable OCSP Must-Staple support (Firefox >= 45)
// https://blog.mozilla.org/security/2015/11/23/improving-revocation-ocsp-must-staple-and-short-lived-certificates/
// https://www.entrust.com/ocsp-must-staple/
// https://github.com/schomery/privacy-settings/issues/40
// NOTICE: Firefox falls back on plain OCSP when must-staple is not configured on the host certificate
user_pref("security.ssl.enable_ocsp_must_staple",		true);

// PREF: Require a valid OCSP response for OCSP enabled certificates
// https://groups.google.com/forum/#!topic/mozilla.dev.security/n1G-N2-HTVA
// Disabling this will make OCSP bypassable by MitM attacks suppressing OCSP responses
// NOTICE: `security.OCSP.require` will make the connection fail when the OCSP responder is unavailable
// NOTICE: `security.OCSP.require` is known to break browsing on some [captive portals](https://en.wikipedia.org/wiki/Captive_portal)
user_pref("security.OCSP.require",				true);

// PREF: Disable TLS Session Tickets
// https://www.blackhat.com/us-13/briefings.html#NextGen
// https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-Slides.pdf
// https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-WP.pdf
// https://bugzilla.mozilla.org/show_bug.cgi?id=917049
// https://bugzilla.mozilla.org/show_bug.cgi?id=967977
user_pref("security.ssl.disable_session_identifiers",		true);

// PREF: Only allow TLS 1.[2-3]
// http://kb.mozillazine.org/Security.tls.version.*
// 1 = TLS 1.0 is the minimum required / maximum supported encryption protocol. (This is the current default for the maximum supported version.)
// 2 = TLS 1.1 is the minimum required / maximum supported encryption protocol.
// 3 = TLS 1.2 is the minimum required / maximum supported encryption protocol.
// 4 = TLS 1.3 is the minimum required / maximum supported encryption protocol.
user_pref("security.tls.version.min",				3);
user_pref("security.tls.version.max",				4);

// PREF: Disable insecure TLS version fallback
// https://bugzilla.mozilla.org/show_bug.cgi?id=1084025
// https://github.com/pyllyukko/user.js/pull/206#issuecomment-280229645
user_pref("security.tls.version.fallback-limit",		4);

// PREF: Enforce Public Key Pinning
// https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning
// https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
// "2. Strict. Pinning is always enforced."
user_pref("security.cert_pinning.enforcement_level",		2);

// PREF: Disallow SHA-1
// https://bugzilla.mozilla.org/show_bug.cgi?id=1302140
// https://shattered.io/
user_pref("security.pki.sha1_enforcement_level",		1);

// PREF: Warn the user when server doesn't support RFC 5746 ("safe" renegotiation)
// https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-3555
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",	true);

// PREF: Disallow connection to servers not supporting safe renegotiation (disabled)
// https://wiki.mozilla.org/Security:Renegotiation#security.ssl.require_safe_negotiation
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-3555
// TODO: `security.ssl.require_safe_negotiation` is more secure but makes browsing next to impossible (2012-2014-... - `ssl_error_unsafe_negotiation` errors), so is left disabled
//user_pref("security.ssl.require_safe_negotiation",		true);

// PREF: Disable automatic reporting of TLS connection errors
// https://support.mozilla.org/en-US/kb/certificate-pinning-reports
// we could also disable security.ssl.errorReporting.enabled, but I think it's
// good to leave the option to report potentially malicious sites if the user
// chooses to do so.
// you can test this at https://pinningtest.appspot.com/
user_pref("security.ssl.errorReporting.automatic",		false);

// PREF: Pre-populate the current URL but do not pre-fetch the certificate in the "Add Security Exception" dialog
// http://kb.mozillazine.org/Browser.ssl_override_behavior
// https://github.com/pyllyukko/user.js/issues/210
user_pref("browser.ssl_override_behavior",			1);

// PREF: Encrypted SNI (when TRR is enabled)
// https://www.cloudflare.com/ssl/encrypted-sni/
// https://wiki.mozilla.org/Trusted_Recursive_Resolver#ESNI
// https://en.wikipedia.org/wiki/Server_Name_Indication#Security_implications_(ESNI)
user_pref("network.security.esni.enabled",			true);

/******************************************************************************
 * SECTION: Cipher suites                                                     *
 ******************************************************************************/

// PREF: Disable null ciphers
user_pref("security.ssl3.rsa_null_sha",				false);
user_pref("security.ssl3.rsa_null_md5",				false);
user_pref("security.ssl3.ecdhe_rsa_null_sha",			false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha",			false);
user_pref("security.ssl3.ecdh_rsa_null_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha",			false);

// PREF: Disable SEED cipher
// https://en.wikipedia.org/wiki/SEED
user_pref("security.ssl3.rsa_seed_sha",				false);

// PREF: Disable 40/56/128-bit ciphers
// 40-bit ciphers
user_pref("security.ssl3.rsa_rc4_40_md5",			false);
user_pref("security.ssl3.rsa_rc2_40_md5",			false);
// 56-bit ciphers
user_pref("security.ssl3.rsa_1024_rc4_56_sha",			false);
// 128-bit ciphers
user_pref("security.ssl3.rsa_camellia_128_sha",			false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",		false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",		false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha",		false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha",		false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha",			false);

// PREF: Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha",		false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha",			false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha",		false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha",		false);
user_pref("security.ssl3.rsa_rc4_128_md5",			false);
user_pref("security.ssl3.rsa_rc4_128_sha",			false);
user_pref("security.tls.unrestricted_rc4_fallback",		false);

// PREF: Disable 3DES (effective key size is < 128)
// https://en.wikipedia.org/wiki/3des#Security
// http://en.citizendium.org/wiki/Meet-in-the-middle_attack
// http://www-archive.mozilla.org/projects/security/pki/nss/ssl/fips-ssl-ciphersuites.html
user_pref("security.ssl3.dhe_dss_des_ede3_sha",			false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha",		false);
user_pref("security.ssl3.rsa_des_ede3_sha",			false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha",		false);

// PREF: Disable ciphers with ECDH (non-ephemeral)
user_pref("security.ssl3.ecdh_rsa_aes_256_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha",		false);

// PREF: Disable 256 bits ciphers without PFS
user_pref("security.ssl3.rsa_camellia_256_sha",			false);

// PREF: Enable GCM ciphers (TLSv1.2 only)
// https://en.wikipedia.org/wiki/Galois/Counter_Mode
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",	true); // 0xc02b
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",		true); // 0xc02f

// PREF: Enable ChaCha20 and Poly1305 (Firefox >= 47)
// https://www.mozilla.org/en-US/firefox/47.0/releasenotes/
// https://tools.ietf.org/html/rfc7905
// https://bugzilla.mozilla.org/show_bug.cgi?id=917571
// https://bugzilla.mozilla.org/show_bug.cgi?id=1247860
// https://cr.yp.to/chacha.html
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256",	true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256",	true);

// PREF: Disable ciphers susceptible to the logjam attack
// https://weakdh.org/
user_pref("security.ssl3.dhe_rsa_camellia_256_sha",		false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha",			false);

// PREF: Disable ciphers with DSA (max 1024 bits)
user_pref("security.ssl3.dhe_dss_aes_128_sha",			false);
user_pref("security.ssl3.dhe_dss_aes_256_sha",			false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha",		false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha",		false);

// PREF: Ciphers with CBC & SHA-1 (disabled)
//user_pref("security.ssl3.rsa_aes_256_sha",			false); // 0x35
//user_pref("security.ssl3.rsa_aes_128_sha",			false); // 0x2f
//user_pref("security.ssl3.ecdhe_rsa_aes_256_sha",		false); // 0xc014
//user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha",		false); // 0xc00a

