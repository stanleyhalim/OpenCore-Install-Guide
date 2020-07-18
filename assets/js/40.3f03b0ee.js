(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{460:function(e,t,a){e.exports=a.p+"assets/img/config-gpu.65a08c27.png"},461:function(e,t,a){e.exports=a.p+"assets/img/corp-windows.cba6825c.png"},577:function(e,t,a){"use strict";a.r(t);var i=a(25),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"disabling-gpu"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#disabling-gpu"}},[e._v("#")]),e._v(" Disabling GPU")]),e._v(" "),i("ul",[i("li",[e._v("Supported version: 0.5.9")])]),e._v(" "),i("p",[i("extoc")],1),e._v(" "),i("p",[e._v("So you need to hide your unsupported GPU? Well with OpenCore things are slightly different, specifically that we need to specify to which exact device we want to spoof. There are 3 ways we can do this:")]),e._v(" "),i("ul",[i("li",[e._v("Boot Flag\n"),i("ul",[i("li",[e._v("Disables all GPUs except the iGPU")])])]),e._v(" "),i("li",[e._v("DeviceProperties\n"),i("ul",[i("li",[e._v("Disables GPU on a per-slot basis")])])]),e._v(" "),i("li",[e._v("SSDT\n"),i("ul",[i("li",[e._v("Disables GPU on a per-slot basis")])])])]),e._v(" "),i("p",[i("strong",[e._v("CSM must be off in the BIOS for the spoofing to work correctly, especially on AMD CPU based systems.")])]),e._v(" "),i("h3",{attrs:{id:"boot-flag"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#boot-flag"}},[e._v("#")]),e._v(" Boot Flag")]),e._v(" "),i("p",[e._v("By far the simplest way, all you need to do is add the following boot-arg:")]),e._v(" "),i("p",[i("code",[e._v("-wegnoegpu")])]),e._v(" "),i("p",[e._v("Do note that this will disable all GPUs excluding the iGPU.")]),e._v(" "),i("h3",{attrs:{id:"deviceproperties-method"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deviceproperties-method"}},[e._v("#")]),e._v(" DeviceProperties Method")]),e._v(" "),i("p",[e._v("Here is quite simple, find the PCI route with "),i("a",{attrs:{href:"https://github.com/acidanthera/gfxutil/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("gfxutil"),i("OutboundLink")],1),e._v(" and then create a new DeviceProperties section with your spoof:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("path/to/gfxutil -f GFX0\n")])])]),i("p",[e._v("And the output will result in something similar:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("DevicePath = PciRoot(0x0)/Pci(0x1,0x0)/Pci(0x0,0x0)/Pci(0x0,0x0)/Pci(0x0,0x0)\n")])])]),i("p",[e._v("With this, navigate towards "),i("code",[e._v("Root -> DeviceProperties -> Add")]),e._v(" and add your PCI route with the following properties:")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[e._v("Key")]),e._v(" "),i("th",{staticStyle:{"text-align":"left"}},[e._v("Type")]),e._v(" "),i("th",{staticStyle:{"text-align":"left"}},[e._v("Value")])])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[e._v("name")]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("data")]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("23646973706C6179")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[e._v("IOName")]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("string")]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("#display")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[e._v("class-code")]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("data")]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("FFFFFFFF")])])])]),e._v(" "),i("p",[i("img",{attrs:{src:a(460),alt:""}})]),e._v(" "),i("h3",{attrs:{id:"ssdt-method"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ssdt-method"}},[e._v("#")]),e._v(" SSDT Method")]),e._v(" "),i("p",[e._v("There are many ways to find the path but generally, the easiest way is to get into Device Manager under windows and find the PCI path.")]),e._v(" "),i("p",[e._v("Example of device path for "),i("code",[e._v("\\_SB.PCI0.PEG0.PEGP")]),e._v(":")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('\n    DefinitionBlock ("", "SSDT", 2, "hack", "spoof", 0x00000000)\n    {\n       External (_SB_.PCI0.PEG0.PEGP, DeviceObj)    // (from opcode)\n\n       Method (_SB.PCI0.PEG0.PEGP._DSM, 4, NotSerialized)  // _DSM: Device-Specific Method\n       {\n          If (LOr (LNot (Arg2), LEqual (_OSI ("Darwin"), Zero)))\n          {\n             Return (Buffer (One)\n             {\n                0x03\n             })\n          }\n\n          Return (Package (0x0A)\n          {\n             "name",\n             Buffer (0x09)\n             {\n                "#display"\n             },\n\n             "IOName",\n             "#display",\n             "class-code",\n             Buffer (0x04)\n             {\n                0xFF, 0xFF, 0xFF, 0xFF\n             },\n\n             "vendor-id",\n             Buffer (0x04)\n             {\n                0xFF, 0xFF, 0x00, 0x00\n             },\n\n             "device-id",\n             Buffer (0x04)\n             {\n                0xFF, 0xFF, 0x00, 0x00\n             }\n          })\n       }\n    }\n\n')])])]),i("p",[e._v("A copy of this SSDT can be found here: "),i("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/Spoof-SSDT.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spoof-SSDT.dsl"),i("OutboundLink")],1),e._v(" You will need "),i("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MaciASL"),i("OutboundLink")],1),e._v(" to compile this. Remember that "),i("code",[e._v(".aml")]),e._v(" is assembled and "),i("code",[e._v(".dsl")]),e._v(" is source code. You can compile with MaciASL by selecting File -> Save As -> ACPI Machine Language.")]),e._v(" "),i("p",[e._v("Source: CorpNewt")]),e._v(" "),i("h2",{attrs:{id:"windows-gpu-selection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#windows-gpu-selection"}},[e._v("#")]),e._v(" Windows GPU Selection")]),e._v(" "),i("p",[e._v("Depending on your setup, you may find that Windows renders games or applications using an undesired GPU.")]),e._v(" "),i("p",[e._v("Many users only have two GPUs. Nvidia and the Intel HD/UHD IGPU. Since Nvidia no longer works on macOS, they may have the monitor plugged into the motherboards HDMI/DP connection for convenience. As a result, Windows will render all games and applications through the IGPU. You can reroute a specific game or application to a different GPU by going to: Settings > System > Display > Graphics settings")]),e._v(" "),i("p",[i("img",{attrs:{src:a(461),alt:"Credit to CorpNewt for image"}})]),e._v(" "),i("p",[e._v("The rendered game or application will have its buffer copied to the IGPU. Which is then displayed to you. This does come with a few downsides:")]),e._v(" "),i("ul",[i("li",[e._v("GSync will no longer work.")]),e._v(" "),i("li",[e._v("Nvidia settings can no longer be opened.")]),e._v(" "),i("li",[e._v("Decreased frame rate.")]),e._v(" "),i("li",[e._v("Increased input latency.")]),e._v(" "),i("li",[e._v("Refresh rate cap.")])]),e._v(" "),i("p",[e._v("If your motherboard only has an HDMI connector for the IGPU, the maximum refresh rate for spec 2.1 is "),i("a",{attrs:{href:"https://www.hdmi.org/spec21Sub/EightK60_FourK120",target:"_blank",rel:"noopener noreferrer"}},[e._v("120Hz"),i("OutboundLink")],1),e._v(". This assumes your board, cable and monitor are of the same spec. This means your 144Hz monitor is only seeing a maximum of 120Hz as determined by the hardware. This limitation "),i("em",[e._v("does not")]),e._v(" apply if your board has a DP connector for the IGPU.")]),e._v(" "),i("p",[e._v("If you have more than two GPUs (AMD, Nvidia and Intel), this setting is limited. A monitor connected to the AMD GPU means Windows will only allow you to select the AMD GPU or the Intel IGPU. The Nvidia GPU will not show.")]),e._v(" "),i("p",[e._v("Note: GSync and NV Settings requires the display to be connected to the GPU. As a recommendation, if you use both operating systems equally your best option is an HDMI or DP switch.")])])}),[],!1,null,null,null);t.default=n.exports}}]);