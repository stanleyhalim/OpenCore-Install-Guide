(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{449:function(e,t,o){e.exports=o.p+"assets/img/folder-gui.e049d147.png"},450:function(e,t,o){e.exports=o.p+"assets/img/gui.a10019ae.png"},451:function(e,t,o){e.exports=o.p+"assets/img/audio-config.756383d4.png"},572:function(e,t,o){"use strict";o.r(t);var i=o(25),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"opencore-beauty-treatment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#opencore-beauty-treatment"}},[e._v("#")]),e._v(" OpenCore beauty treatment")]),e._v(" "),i("ul",[i("li",[e._v("Supported version: 0.5.9")])]),e._v(" "),i("p",[e._v("Main thing this guide will go over:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html#giving-opencore-a-gui",target:"_blank",rel:"noopener noreferrer"}},[e._v("Giving OpenCore a GUI"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html#setting-up-a-boot-chime",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setting up a boot-chime"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"setting-up-opencore-s-gui"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-opencore-s-gui"}},[e._v("#")]),e._v(" Setting up OpenCore's GUI")]),e._v(" "),i("p",[e._v("So to get started, we're gonna need 0.5.7 or newer as these builds have the GUI included with the rest of the files. If you're on an older version, I recommend updating: "),i("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/update.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Updating OpenCore"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("Once that's done, we'll need a couple things:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData",target:"_blank",rel:"noopener noreferrer"}},[e._v("Binary Resources"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCanopy.efi"),i("OutboundLink")],1),e._v(" "),i("ul",[i("li",[e._v("Note: OpenCanopy.efi must be from the same build as your OpenCore files, as mismatched files can cause boot issues")])])])]),e._v(" "),i("p",[e._v("Once you have both of these, we'll next want to add it to our EFI partition:")]),e._v(" "),i("ul",[i("li",[e._v("Add the "),i("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData",target:"_blank",rel:"noopener noreferrer"}},[e._v("Resources folder"),i("OutboundLink")],1),e._v(" to EFI/OC")]),e._v(" "),i("li",[e._v("Add OpenCanopy.efi to EFI/OC/Drivers")])]),e._v(" "),i("p",[i("img",{attrs:{src:o(449),alt:""}})]),e._v(" "),i("p",[e._v("Now in our config.plist, we have 2 things we need to fix:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("Misc -> Boot -> PickerMode")]),e._v(": "),i("code",[e._v("External")])]),e._v(" "),i("li",[i("code",[e._v("Misc -> Boot -> PickerAttributes")]),e._v(":"),i("code",[e._v("1")]),e._v(" "),i("ul",[i("li",[e._v("This enables .VolumeIcon.icns reading off the drive, this is how macOS installer icons work\n"),i("ul",[i("li",[e._v("0x0008: This is another value which allows for alternative icons, such as the legacy GUI found on legacy Macs. This can be combined with "),i("code",[e._v("1")]),e._v(" for both legacy GUI and custom drive icons(PickerAttributes: "),i("code",[e._v("9")]),e._v(")")]),e._v(" "),i("li",[e._v("Other settings for PickerAttributes can be found in the "),i("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration.pdf"),i("OutboundLink")],1)])])])])]),e._v(" "),i("li",[i("code",[e._v("UEFI -> Drivers")]),e._v(" and add OpenCanopy.efi")])]),e._v(" "),i("p",[e._v("Once all this is saved, you can reboot and be greeted with a true Mac-like GUI:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(450),alt:"Credit to vit9696"}})]),e._v(" "),i("h2",{attrs:{id:"setting-up-boot-chime-with-audiodxe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-boot-chime-with-audiodxe"}},[e._v("#")]),e._v(" Setting up Boot-chime with AudioDxe")]),e._v(" "),i("p",[e._v("So to start, we'll need a couple things:")]),e._v(" "),i("ul",[i("li",[e._v("Onboard audio output\n"),i("ul",[i("li",[e._v("USB DACs will not work")]),e._v(" "),i("li",[e._v("GPU audio out is a hit or miss")])])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("AudioDxe"),i("OutboundLink")],1),e._v(" in both EFI/OC/Drivers and UEFI -> Drivers")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData",target:"_blank",rel:"noopener noreferrer"}},[e._v("Binary Resources"),i("OutboundLink")],1),e._v(" "),i("ul",[i("li",[e._v("Add the Resources folder to EFI/OC, just like we did with the OpenCore GUI section")]),e._v(" "),i("li",[e._v("For those running out of space, "),i("code",[e._v("OCEFIAudio_VoiceOver_Boot.wav")]),e._v(" is all that's required for the Boot-Chime")])])]),e._v(" "),i("li",[e._v("Debug version of OpenCore with logging enabled\n"),i("ul",[i("li",[e._v("See "),i("RouterLink",{attrs:{to:"/troubleshooting/debug.html"}},[e._v("OpenCore Debugging")]),e._v(" for more info")],1)])])]),e._v(" "),i("p",[i("strong",[e._v("Settings up NVRAM")]),e._v(":")]),e._v(" "),i("ul",[i("li",[e._v("NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82:\n"),i("ul",[i("li",[i("code",[e._v("SystemAudioVolume | Data | 0x46")])]),e._v(" "),i("li",[e._v("This is the boot-chime and screen reader volume, note it's in hexadecimal so would become "),i("code",[e._v("70")]),e._v(" in decimal")])])])]),e._v(" "),i("p",[i("strong",[e._v("Setting up UEFI -> Audio:")])]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("AudioCodec:")]),e._v(" "),i("ul",[i("li",[e._v("Codec address of Audio controller")]),e._v(" "),i("li",[e._v("To find yours:\n"),i("ul",[i("li",[e._v("Check "),i("a",{attrs:{href:"https://github.com/toleda/audio_ALCInjection/blob/master/IORegistryExplorer_v2.1.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("IORegistryExplorer"),i("OutboundLink")],1),e._v(" -> HDEF -> AppleHDAController -> IOHDACodecDevice and see the "),i("code",[e._v("IOHDACodecAddress")]),e._v(" property")]),e._v(" "),i("li",[e._v("ex: "),i("code",[e._v("0x0")]),e._v(" "),i("ul",[i("li",[e._v("Can also check via terminal(Note if multiple show up, use the vendor ID to find the right device)l:")])])])])])])])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("ioreg -rxn IOHDACodecDevice | grep VendorID   // List all possible devices\n")])])]),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("ioreg -rxn IOHDACodecDevice | grep IOHDACodecAddress // Grab the codec address\n")])])]),i("ul",[i("li",[i("p",[i("strong",[e._v("Audio Device:")])]),e._v(" "),i("ul",[i("li",[e._v("PciRoot of audio controller")]),e._v(" "),i("li",[e._v("Run "),i("a",{attrs:{href:"https://github.com/acidanthera/gfxutil/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("gfxutil"),i("OutboundLink")],1),e._v(" to find the path:\n"),i("ul",[i("li",[i("code",[e._v("/path/to/gfxutil -f HDEF")])]),e._v(" "),i("li",[e._v("ex: "),i("code",[e._v("PciRoot(0x0)/Pci(0x1f,0x3)")])])])])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("AudioOut:")])]),e._v(" "),i("ul",[i("li",[e._v("The specific output of your Audio controller, easiest way to find the right one is to go through each one(from 0 to N - 1)")]),e._v(" "),i("li",[e._v("ex: "),i("code",[e._v("2")]),e._v(" "),i("ul",[i("li",[e._v("You can find all the ones for your codec in the OpenCore debug logs:")])])])])])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("06:065 00:004 OCAU: Matching PciRoot(0x0)/Pci(0x1F,0x3)/VenMsg(A9003FEB-D806-41DB-A491-5405FEEF46C3,00000000)...\n06:070 00:005 OCAU: 1/2 PciRoot(0x0)/Pci(0x1F,0x3)/VenMsg(A9003FEB-D806-41DB-A491-5405FEEF46C3,00000000) (5 outputs) - Success\n")])])]),i("ul",[i("li",[i("p",[i("strong",[e._v("AudioSupport:")])]),e._v(" "),i("ul",[i("li",[e._v("Set this to "),i("code",[e._v("True")])])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("MinimumVolume:")])]),e._v(" "),i("ul",[i("li",[e._v("Volume level from "),i("code",[e._v("0")]),e._v(" to "),i("code",[e._v("100")])]),e._v(" "),i("li",[e._v("To not blow the speakers, set it to "),i("code",[e._v("70")])]),e._v(" "),i("li",[e._v("Note boot-chime will not play if MinimumVolume is higher than "),i("code",[e._v("SystemAudioVolume")]),e._v(" that we set back in the "),i("code",[e._v("NVRAM")]),e._v(" section")])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("PlayChime:")])]),e._v(" "),i("ul",[i("li",[e._v("Set this to "),i("code",[e._v("True")])])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("VolumeAmplifier:")])]),e._v(" "),i("ul",[i("li",[e._v("The Volume amplification, value will differ depending on your codec")]),e._v(" "),i("li",[e._v("Formula is as follows:\n"),i("ul",[i("li",[e._v("(SystemAudioVolume * VolumeAmplifier)/100 = Raw Volume(but cannot exceed 100)")]),e._v(" "),i("li",[e._v("ex: ("),i("code",[e._v("70")]),e._v(" x "),i("code",[e._v("VolumeAmplifier")]),e._v(")/"),i("code",[e._v("100")]),e._v(" = "),i("code",[e._v("100")]),e._v("  -> ("),i("code",[e._v("100")]),e._v(" x "),i("code",[e._v("100")]),e._v(") / "),i("code",[e._v("70")]),e._v(" = VolumeAmplifier = "),i("code",[e._v("142.9")]),e._v("(we'll round it to "),i("code",[e._v("143")]),e._v(" for simplicity)")])])])])])]),e._v(" "),i("p",[e._v("Once done, you should get something like this:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(451),alt:""}})]),e._v(" "),i("p",[i("strong",[e._v("Note for visually impaired")]),e._v(":")]),e._v(" "),i("ul",[i("li",[e._v("OpenCore hasn't forgotten about you! With the AudioDxe setup, you can enable both picker audio and FileVault VoiceOver with these 2 settings:\n"),i("ul",[i("li",[i("code",[e._v("Misc -> Boot -> PickerAudioAssist -> True")]),e._v(" to enable picker audio")]),e._v(" "),i("li",[i("code",[e._v("UEFI -> ProtocolOverrides -> AppleAudio -> True")]),e._v(" to enable FileVault voice over\n"),i("ul",[i("li",[e._v("See "),i("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security and FileVault"),i("OutboundLink")],1),e._v(" on how to setup the rest for proper FileVault support")])])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);