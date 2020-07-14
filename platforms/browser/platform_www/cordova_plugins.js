cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-native-spinner/www/SpinnerDialog.js",
        "id": "cordova-plugin-native-spinner.SpinnerDialog",
        "pluginId": "cordova-plugin-native-spinner",
        "clobbers": [
            "SpinnerDialog"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-native-spinner": "1.1.3",
    "cordova-plugin-dialogs": "1.2.1",
    "cordova-plugin-geolocation": "2.1.0"
}
// BOTTOM OF METADATA
});