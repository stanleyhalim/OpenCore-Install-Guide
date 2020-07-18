(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{326:function(e,t,a){e.exports=a.p+"assets/img/format-usb.83a24b13.png"},349:function(e,t,a){e.exports=a.p+"assets/img/mount-efi-usb.c855475e.png"},350:function(e,t,a){e.exports=a.p+"assets/img/base-efi.3b1f0304.png"},489:function(e,t,a){e.exports=a.p+"assets/img/gib.b3fe2322.png"},490:function(e,t,a){e.exports=a.p+"assets/img/gib-process.c5982045.png"},491:function(e,t,a){e.exports=a.p+"assets/img/gib-location.8afc21af.png"},492:function(e,t,a){e.exports=a.p+"assets/img/gib-done.28275135.png"},581:function(e,t,a){"use strict";a.r(t);var o=a(25),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"making-the-installer-in-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer-in-macos"}},[e._v("#")]),e._v(" Making the installer in macOS")]),e._v(" "),o("ul",[o("li",[e._v("Supported version: 0.5.9")])]),e._v(" "),o("p",[e._v("While you don't need a fresh install of macOS to use OpenCore, some users prefer having a fresh slate with their boot manager upgrades.")]),e._v(" "),o("p",[e._v("To start we'll want to grab ourselves a copy of macOS, you can skip this and head to formatting the USB if you're just making a bootable OpenCore stick and not an installer. For everyone else, you can either download macOS from the App Store or with gibMacOS")]),e._v(" "),o("p",[o("strong",[e._v("Note for legacy users")])]),e._v(" "),o("ol",[o("li",[e._v("First follow the "),o("RouterLink",{attrs:{to:"/extras/legacy.html"}},[e._v("Legacy Install")]),e._v(" section")],1),e._v(" "),o("li",[e._v("Once completed, continue the guide at the "),o("strong",[o("a",{attrs:{href:"#downloading-macos"}},[e._v("Downloading macOS")])]),e._v(" section")])]),e._v(" "),o("p",[e._v("For those needing macOS versions no longer hosted on Apple's catalog(ie. Sierra and older), follow the "),o("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/installer-guide/legacy-mac-install.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Legacy macOS install"),o("OutboundLink")],1),e._v(" guide")]),e._v(" "),o("h2",{attrs:{id:"downloading-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos"}},[e._v("#")]),e._v(" Downloading macOS")]),e._v(" "),o("p",[e._v("From a  macOS machine that meets the requirements of the OS version you want to install, go directly to the AppStore and download the desired OS release the continue and continue to "),o("a",{attrs:{href:"#setting-up-the-installer"}},[o("strong",[e._v("Setting up the installer")])])]),e._v(" "),o("p",[e._v("For machines that need a specific OS release or can't download from the AppStore, you can use the GibMacOS utility.")]),e._v(" "),o("p",[e._v("Now lets grab "),o("a",{attrs:{href:"https://github.com/corpnewt/gibMacOS",target:"_blank",rel:"noopener noreferrer"}},[e._v("GibMacOS"),o("OutboundLink")],1),e._v(", unzip on a local directory.")]),e._v(" "),o("p",[e._v("Next run the "),o("code",[e._v("gibMacOS.command")]),e._v(":")]),e._v(" "),o("p",[o("img",{attrs:{src:a(489),alt:""}})]),e._v(" "),o("p",[e._v("As you can see, we get a nice list of macOS installers. If you need beta versions of macOS, you can select "),o("code",[e._v("C. Change Catalog")]),e._v(". For this example we'll choose 1:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(490),alt:""}})]),e._v(" "),o("p",[e._v("This is going to take a while as we're downloading the entire 8GB+ macOS installer, so highly recommend reading the rest of the guide while you wait.")]),e._v(" "),o("p",[e._v("Once finished, we'll next want to run the "),o("code",[e._v("BuildmacOSInstallApp.command")]),e._v(":")]),e._v(" "),o("p",[o("img",{attrs:{src:a(491),alt:""}})]),e._v(" "),o("p",[e._v("You will be prompted for the macOS installer files which were downloaded to "),o("code",[e._v("macOS Downloads")]),e._v(" folder in the GibMacOS directory.")]),e._v(" "),o("p",[e._v('From the Finder, drill down to the folder containing the downloaded files and either drag it to the command line or "Cmd+C" and paste it to the terminal.')]),e._v(" "),o("p",[e._v("Once the task is completed exit the utility, you will find the Install file in the directory.")]),e._v(" "),o("p",[e._v("Move the newly created image to Applications folder, this will simplify the next section.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(492),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"setting-up-the-installer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-installer"}},[e._v("#")]),e._v(" Setting up the installer")]),e._v(" "),o("p",[e._v("Now we'll be formatting the USB to prep for both the macOS installer and OpenCore. We'll want to use macOS Extended(HFS+) with a GUID partition map. What this will do is create 2 partitions. The main "),o("code",[e._v("MyVolume")]),e._v(" and a second called "),o("code",[e._v("EFI")]),e._v(" which is used as a boot partition where your firmware will check for boot files.")]),e._v(" "),o("ul",[o("li",[e._v("Note by default Disk Utility only shows partitions, press Cmd/Win+2 to show all devices(Alternatively you can press the view button)")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(326),alt:"Formatting the USB"}})]),e._v(" "),o("p",[e._v("Next run the "),o("code",[e._v("createinstallmedia")]),e._v(" command provided by "),o("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple"),o("OutboundLink")],1),e._v(", note that the command is made for USB's formatted with the name "),o("code",[e._v("MyVolume")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo /Applications/Install\\ macOS\\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n")])])]),o("p",[e._v("This will take some time so may want to grab a coffee or continue reading the guide(to be fair you really shouldn't be following this guide step by step without reading the whole thing first)")]),e._v(" "),o("p",[e._v("You can also replace the "),o("code",[e._v("createinstallmedia")]),e._v(" path with that of where your installer's located, same idea with the drive name.")]),e._v(" "),o("h2",{attrs:{id:"setting-up-opencore-s-efi-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-opencore-s-efi-environment"}},[e._v("#")]),e._v(" Setting up OpenCore's EFI environment")]),e._v(" "),o("p",[e._v("Setting up OpenCore's EFI environment is simple, all you need to do is mount our EFI system partition. This is automatically made when we format with GUID but is unmounted by default, this is where our friend "),o("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[e._v("MountEFI"),o("OutboundLink")],1),e._v(" comes in:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(349),alt:"MountEFI"}})]),e._v(" "),o("p",[e._v("You'll notice that once we open the EFI partition, it's empty. This is where the fun begins.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(350),alt:"Empty EFI partition"}})]),e._v(" "),o("h3",{attrs:{id:"now-with-all-this-done"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-this-done"}},[e._v("#")]),e._v(" Now with all this done")]),e._v(" "),o("p",[e._v("... head to "),o("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[e._v("Setting up the EFI")]),e._v(" to finish up your work.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);