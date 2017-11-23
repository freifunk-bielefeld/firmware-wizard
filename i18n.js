
var translations = {
  'de-freifunk': {
    'tr-introduction': 'Erst mit der Freifunk-Firmware wird dein Router zu einem Teil des Freifunk-Netzes. Sie ist fertig vorkonfiguriert, um Kontakt mit benachbarten Freifunk-Knoten aufzunehmen, ein offenes und anonymes Freifunk-WLAN auszusenden und dich dabei vor der Störerhaftung zu schützen.',
    'tr-introduction-additional': 'Bitte verwende das <em>Erstinstallationsimage</em>, wenn Du deinen Router gerade erst gekauft hast und sich darauf noch keine Freifunk-/LEDE-/OpenWRT-Firmware befindet. Ist bereits eine Freifunk- oder LEDE-/OpenWRT-Firmware installiert, verwende bitte die mit <em>Upgrade</em> bezeichnete Version.',
    'tr-different-versions': 'Diese Freifunk-Firmware bieten wir in verschiedenen Versionen an:',
  },
  'de': {
    'tr-list-files': 'Liste aller Dateien',
    'tr-loading': 'Bitte warten...',
    'tr-show-table': 'Tabelle anzeigen',
    'tr-select-firmware': 'Wähle deine Firmware',
    'tr-introduction': 'Die Firmware installiert ein Linux-basiertes Betriebsystem auf den Router. Darauf kann verschiedene Software installiert werden.',
    'tr-introduction-additional': 'Bitte verwende das <em>Erstinstallationsimage</em>, wenn Du deinen Router gerade erst gekauft hast und sich darauf noch keine LEDE-/OpenWRT-Firmware befindet. Ist bereits eine LEDE- oder OpenWRT-Firmware installiert, verwende bitte die mit <em>Upgrade</em> bezeichnete Version.',
    'tr-different-versions': 'Diese Firmware bieten wir in verschiedenen Versionen an:',
    'tr-snapshot-warning': 'Vorsicht! Unsere experimentelle Firmware wurde <b>nicht</b> getestet und kann dein Gerät jederzeit und unangekündigt in einen Zustand versetzen, in dem du nur mit einem Lötkolben und dem Öffnen des Gehäuses weiter kommst. Verwende diese Version nur, wenn Du Dir darüber im Klaren bist!',
    'tr-back-to-selection': 'Zurück zum Auswahlmenü',
    'tr-list-files': 'Liste aller Dateien',
    'tr-firmware': 'Firmware',
    'tr-recommendation': 'Empfehlung',
    'tr-stable-desciption': 'Gut getestet, zuverlässig und stabil.',
    'tr-beta-desciption': 'Vorabtests neuer Stable-Kandidaten.',
    'tr-snapshot-desciption': 'Ungetestet, automatisch generiert.',
    'tr-available-versions': 'Für das gewählte Routermodell sind folgende Versionen vorhanden:',
    'tr-selection-consequences': 'Die Auswahl der passenden Version entscheidet über die Stablität des Routers und den potentiell anfallenden Wartungsaufwand.',
    'tr-manufacturer': 'Hersteller',
    'tr-model': 'Modell',
    'tr-first-installation': 'Erstinstallation',
    'tr-upgrade': 'Upgrade',
    'tr-generic-error': 'Da ist was schiefgelaufen. Frage doch bitte einmal im Chat nach.',
    'tr-select-manufacturer': '-- Hersteller wählen --',
    'tr-select-model': '-- Modell wählen --',
    'tr-select-revision': '-- Hardwarerevision wählen --',
    'tr-factory': 'Erstinstallation',
    'tr-sysupgrade': 'Upgrade',
    'tr-rootfs': 'Root-Image',
    'tr-kernel': 'Kernel-Image',
    'tr-download-snapshot': 'Download für Experimentierfreudige',
    'tr-all': 'alle'
  },
  'en': {
    'tr-list-files': 'List all files',
    'tr-loading': 'Loading...',
    'tr-show-table': 'Show table',
    'tr-select-firmware': 'Select your image',
    'tr-introduction': 'The firmware puts a Linux based operating system on your device. It allows you to install additional software.',
    'tr-introduction-additional': 'If you have just bought the device, please choose the <em>first installation</em> image. If you have already installed LEDE/OpenWRT, use the <em>upgrade</em> images.',
    'tr-different-versions': 'This firmware is available in different versions:',
    'tr-snapshot-warning': 'Attention! The following images were <b>not</b> tested und might cause your device to put it in state that might need soldering. Please use this version only if you know what you do!',
    'tr-back-to-selection': 'Back to selection',
    'tr-list-files': 'List all files',
    'tr-firmware': 'Firmware',
    'tr-recommendation': 'Recommendation',
    'tr-stable-desciption': 'Well tested, reliable and stable.',
    'tr-beta-desciption': 'Testing candidates for the next stable release.',
    'tr-snapshot-desciption': 'Untested, build automatically.',
    'tr-available-versions': 'For the selected router model, the following router versions are available:',
    'tr-selection-consequences': 'The selection of the model decides how stable the version will be and decides the potential maintenance requirements.',
    'tr-manufacturer': 'Manufacturer',
    'tr-model': 'Model',
    'tr-first-installation': 'First installation',
    'tr-upgrade': 'Upgrade',
    'tr-select-manufacturer': '-- Select manufacturer --',
    'tr-select-model': '-- Select model --',
    'tr-select-revision': '-- Select revision --',
    'tr-factory': 'First installation',
    'tr-sysupgrade': 'Upgrade',
    'tr-rootfs': 'Root-Image',
    'tr-kernel': 'Kernel-Image',
    'tr-download-snapshot': 'Download for testers',
    'tr-all': 'all'
  }
}

// Complement translations based on other translations
translations['de-freifunk'] = Object.assign({}, translations['de'], translations['de-freifunk']);
