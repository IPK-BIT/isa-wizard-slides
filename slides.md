---
theme: seriph
background: https://images.unsplash.com/photo-1475906089153-644d9452ce87?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title: One Tool, Many Domains
info: Harmonizing FAIR Metadata Collection with the ISA Wizard
class: text-center
drawings:
  persist: false
defaults:
  transition: fade
comark: true
duration: 25min
addons:
  - slidev-addon-qrcode
  - window-mockup
  - fancy-arrow
---

# One Tool, Many Domains
 
## Harmonizing FAIR Metadata Collection with the ISA Wizard
 
<div class="pt-10 text-base opacity-70">
Manuel Feser, Patrick König, Daniel Arend, Sebastian Beier, Dennis Psaroudakis,<br>
Sarah Fischer-Zielke, Rica Rehfeld, Marc Heuermann, Klára Panzarová, Uwe Scholz
</div>
<div class="pt-4 text-sm opacity-60">
nfdi4ls - IB2026, Gatersleben, 03. September 2026
</div>

---
layout: default
---

# The FAIRness Problem

<div class="grid grid-cols-2 gap-8 mt-4">

<!-- Left Persona: Postdoc Paul -->
<div class="border border-emerald-500/30 rounded-xl p-4 bg-emerald-500/5">
  <div class="flex items-center gap-4 mb-4">
    <img class="rounded-full w-32" src="/paul.png" />
    <div>
      <h3 class="text-xl font-bold text-emerald-600 dark:text-emerald-400 m-0">Postdoc Paul</h3>
      <p class="text-xs opacity-75 m-0 italic">The Researcher</p>
    </div>
  </div>

  <ul class="space-y-2 text-sm">
    <li>Wants to publish and move on to the next experiment</li>
    <li>Works through multi-tab metadata spreadsheets with unclear formatting rules</li>
    <li>Sees FAIR compliance as extra overhead on top of the actual research</li>
  </ul>
</div>

<!-- Right Persona: Data Manager Doro -->
<div class="border border-red-500/30 rounded-xl p-4 bg-red-500/5">
  <div class="flex items-center gap-4 mb-4">
    <img class="rounded-full w-32" src="/doro.png" />
    <div>
      <h3 class="text-xl font-bold text-red-600 dark:text-red-300 m-0">Data Manager Doro</h3>
      <p class="text-xs opacity-75 m-0 italic">The Compliance Steward</p>
    </div>
  </div>

  <ul class="space-y-2 text-sm">
    <li>Ensures data meets institutional and repository standards</li>
    <li>Regularly finds missing fields, inconsistent formatting, and typos</li>
    <li>Spends significant time reviewing and correcting submissions manually</li>
  </ul>
</div>

</div>

<div class="mt-4 text-center bg-gray-500/10 p-4 rounded-lg">
  <p class="text-sm font-semibold m-0">
    Paul and Doro are both working toward reproducible science — they just need a workflow that supports both of their goals at once.
  </p>
</div>

---
layout: default
---

# The Root of the Conflict: The ISA Standard

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
  <div class="space-y-4 text-sm">
    <p>
      Why are Postdoc Paul and Data Manager Doro at odds? It all comes down to the metadata standard they are forced to use: <strong>The ISA Framework</strong> (Investigation, Study, Assay).
    </p>
    <p>
      The ISA model is globally recognized as the gold standard for FAIR life science data. It cleanly structures complex experiments into three hierarchical layers.
    </p>
    <p class="text-green-400 font-semibold">
      For Paul, structuring experiments into this rigid hierarchy feels like an administrative trap.
    </p>
    <p class="text-red-400 font-semibold">
      For Doro, ISA is mandatory because it makes data machine-readable and repository-ready.
    </p>
  </div>
  <div class="border border-blue-500/30 rounded-xl p-6 bg-blue-500/5">
    <img src="/isa.png"/>
  </div>
</div>

---
layout: default
---

# Architecture & Design Principles

<div class="mt-12 space-y-8 max-w-5xl mx-auto">
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-emerald-400">01 / Dynamic UI</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        The user interface is entirely separated from the core codebase. Custom wizards render on-the-fly directly from configurations with zero application adjustments required.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-red-400">02 / Stewardship</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        Data stewards dictate questions, parameters, and mappings, ensuring researchers are automatically guided down fully compliant pathways.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-blue-400">03 / Validation</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        Dataset structures are programmatically generated straight from ISA JSON schemas, guaranteeing absolute structural validity by design.
      </p>
    </div>
  </div>
</div>

---
layout: default
---

<div class="text-2xl font-mono font-bold text-emerald-400 mb-4">01 / Dynamic UI</div>

<Transform :scale="0.5" class="w-[200%]">
  <IsaWizardEmbed height="900px" configUrl="/dynamic-ui-config.json" />
</Transform>

---
layout: default
---

<div class="text-2xl font-mono font-bold text-red-400 mb-4">02 / Stewardship</div>

````md magic-move
```json
"phenotyping-study": {
  "metadata": {
    "type": "study",
    "code": "phenotyping-study",
    "label": "Phenotyping Study",
    "description": "A study represents a unit of research within your investigation."
  },
  "steps": []
}
```
```json
"phenotyping-study": {
  "metadata": { <!-- ... --/> },
  "steps": [
    {
      "title": "Study Information",
      "texts": ["Please provide the following information about your study."],
      "fields": []
    }
}
```
```json
"phenotyping-study": {
  "metadata": { <!-- ... --> },
  "steps": [
    { <!-- ... -->
      "fields": [
        {
          "label": "Study Title",
          "type": "text",
          "isaMapping": { "jsonPath": "title" },
          "explanation": "A descriptive title for your study."
        },
        { <!-- ... --> },
        { <!-- ... --> }
      ]
    }
  ]
}
```
```json
"phenotyping-study": {
  "metadata": { <!-- ... --> },
  "steps": [
    { <!-- ... -->
      "fields": [
        { <!-- ... --> },
        {
          "label": "Study Description",
          "type": "textarea",
          "isaMapping": { "jsonPath": "description" },
          "explanation": "A description of your study."
        },
        { <!-- ... --> }
      ]
    }
  ]
}
```
```json
"phenotyping-study": {
  "metadata": { <!-- ... --> },
  "steps": [
    { <!-- ... -->
      "fields": [
        { <!-- ... --> },
        { <!-- ... --> },
        {
          "label": "Study Submission Date",
          "type": "date",
          "isaMapping": { "jsonPath": "submissionDate" },
          "explanation": "The date when your study was submitted."
        }
      ]
    }
  ]
}
```
```json
"phenotyping-study": {
  "metadata": { <!-- ... --> },
  "steps": [
    { <!-- ... --> },
    {
      "title": "Study Design Descriptors",
      "texts": [
        "Please provide information about the design of your study using ontology annotations."
      ],
      "component": {
        "type": "ontology-annotations",
        "isaMapping": { "jsonPath": "studyDesignDescriptors" },
        "label": "Study Design Descriptors",
        "explanation": "Add study design descriptors."
      }
    }
  ]
}
```
````
  

---
layout: two-cols-header
layoutClass: space-x-4
---

<div class="text-2xl font-mono font-bold text-blue-400 mb-4">03 / Validation</div>

::left::

```js
function addPublication() {
		const newPublication = Schema.getObjectFromSchema('publication');
		value = [...(value || []), newPublication];
}
```

- Every ISA-JSON object is created programmatically from its ISA-JSON schema
- Export to ISA-Tab or ARC implemented with `isa4js` and `Arctrl`

::right::

````md magic-move
```json
{
	"$schema": "http://json-schema.org/dra...",
	"title": "ISA investigation schema",
	"name": "ISA investigation schema",
	"description": "JSON-schema represent...",
	"type": "object",
	"properties": {
		"comments": {
			"type": "array",
			"items": {
				"$ref": "comment_schema.json#"
			}
		},
		"pubMedID": { "type": "string" },
		"doi": { "type": "string" },
		"authorList": { "type": "string" },
		"title": { "type": "string" },
		"status": {
			"$ref": "ontology_annotation_sc..."
		}
	},
	"additionalProperties": false
}
```
```json
{
  "comments": [],
  "pubMedID": "",
  "doi": "",
  "authorList": "",
  "title": "",
  "status": {
    "@id": "",
    "annotationValue": "",
    "termSource": "",
    "termAccession": "",
    "comments": []
  }
}
```
````

---
layout: section
---

# Use Cases

---
layout: default
clicks: 3
---

# Use Cases

<div class="flex h-[450px] w-full gap-4">
  
  <!-- MIAPPE Box (Step 0) -->
  <div 
    @click="$slidev.nav.clicks = 0"
    class="transition-all duration-300 ease-in-out rounded-lg border overflow-hidden flex flex-col items-center"
    :class="$slidev.nav.clicks === 0 ? 'bg-green-400/50 border-green-500 flex-[4] p-4' : 'bg-green-400/20 border-green-400 w-20 py-4'"
  >
    <img 
      src="/plant-phenotyping-alt.png" 
      class="transition-all duration-300 object-contain flex-shrink-0" 
      :class="$slidev.nav.clicks === 0 ? 'w-40 h-40' : 'w-10 h-10'" 
    />
    <!-- Expanded Content -->
    <div v-show="$slidev.nav.clicks === 0" class="w-full mt-4 flex-grow">
      <h3 class="text-center w-full font-bold text-xl mb-4">MIAPPE</h3>
      <ul class="list-disc pl-5">
        <li>Produce metadata compliant with MIAPPE</li>
        <li>Simplify capture of study design, environmental conditions and measured traits</li>
      </ul>
    </div>
    <!-- Collapsed Content (Book Spine) -->
    <div v-show="$slidev.nav.clicks !== 0" class="flex-grow flex items-center justify-center mt-4">
      <h3 class="whitespace-nowrap font-bold text-lg tracking-wider" style="writing-mode: vertical-rl; transform: rotate(180deg);">
        MIAPPE
      </h3>
    </div>
  </div>

  <!-- BrAPI4PSI Box (Step 1) -->
  <div 
    @click="$slidev.nav.clicks = 1"
    class="transition-all duration-300 ease-in-out rounded-lg border overflow-hidden flex flex-col items-center"
    :class="$slidev.nav.clicks === 1 ? 'bg-blue-400/50 border-blue-500 flex-[4] p-4' : 'bg-blue-400/20 border-blue-400 w-20 py-4'"
  >
    <img 
      src="/high-throughput-phenotyping-alt.png" 
      class="transition-all duration-300 object-contain flex-shrink-0" 
      :class="$slidev.nav.clicks === 1 ? 'w-40 h-40' : 'w-10 h-10'" 
    />
    <!-- Expanded Content -->
    <div v-show="$slidev.nav.clicks === 1" class="w-full mt-4 flex-grow">
      <h3 class="text-center w-full font-bold text-xl mb-4">BrAPI4PSI</h3>
      <ul class="list-disc pl-5">
        <li>Integrates with BrAPI accessible data to generate ISA compliant metadata</li>
        <li>Support High-Throughput Phenotyping Facilities</li>
      </ul>
    </div>
    <!-- Collapsed Content (Book Spine) -->
    <div v-show="$slidev.nav.clicks !== 1" class="flex-grow flex items-center justify-center mt-4">
      <h3 class="whitespace-nowrap font-bold text-lg tracking-wider" style="writing-mode: vertical-rl; transform: rotate(180deg);">
        BrAPI4PSI
      </h3>
    </div>
  </div>

  <!-- MIMSA Box (Step 2) -->
  <div 
    @click="$slidev.nav.clicks = 2"
    class="transition-all duration-300 ease-in-out rounded-lg border overflow-hidden flex flex-col items-center"
    :class="$slidev.nav.clicks === 2 ? 'bg-red-400/50 border-red-500 flex-[4] p-4' : 'bg-red-400/20 border-red-400 w-20 py-4'"
  >
    <img 
      src="/animal-phenotyping-alt.png" 
      class="transition-all duration-300 object-contain flex-shrink-0" 
      :class="$slidev.nav.clicks === 2 ? 'w-40 h-40' : 'w-10 h-10'" 
    />
    <!-- Expanded Content -->
    <div v-show="$slidev.nav.clicks === 2" class="w-full mt-4 flex-grow">
      <h3 class="text-center w-full font-bold text-xl mb-4">MIMSA</h3>
      <ul class="list-disc pl-5">
        <li>Produce metadata compliant with MIMSA</li>
        <li>Facilitates metadata capture for animal studies, ensuring interdisciplinary interoperability</li>
      </ul>
    </div>
    <!-- Collapsed Content (Book Spine) -->
    <div v-show="$slidev.nav.clicks !== 2" class="flex-grow flex items-center justify-center mt-4">
      <h3 class="whitespace-nowrap font-bold text-lg tracking-wider" style="writing-mode: vertical-rl; transform: rotate(180deg);">
        MIMSA
      </h3>
    </div>
  </div>

 <div 
    @click="$slidev.nav.clicks = 3"
    class="transition-all duration-300 ease-in-out rounded-lg border overflow-hidden flex flex-col items-center border-dashed"
    :class="$slidev.nav.clicks === 3 ? 'bg-neutral-400/50 border-neutral-500 flex-[4] p-4' : 'bg-neutral-400/20 border-neutral-400 w-20 py-4'"
  >
    <img 
      src="/call-to-action.png" 
      class="transition-all duration-300 object-contain flex-shrink-0" 
      :class="$slidev.nav.clicks === 3 ? 'w-40 h-40' : 'w-10 h-10'" 
    />
    <!-- Expanded Content -->
    <div v-show="$slidev.nav.clicks === 3" class="w-full mt-4 flex-grow">
      <h3 class="text-center w-full font-bold text-xl mb-4">What's Next</h3>
      <ul class="list-disc pl-5">
        <li>Architecture generalizes beyond phenotyping — any domain with a defined metadata standard can be onboarded via config</li>
        <li>Looking for incubator projects and new use cases — reach out if your domain needs FAIR-compliant metadata collection</li>
      </ul>
    </div>
    <!-- Collapsed Content (Book Spine) -->
    <div v-show="$slidev.nav.clicks !== 3" class="flex-grow flex items-center justify-center mt-4">
      <h3 class="whitespace-nowrap font-bold text-lg tracking-wider" style="writing-mode: vertical-rl; transform: rotate(180deg);">
        Future
      </h3>
    </div>
</div>

</div>

---
layout: default
---

<Transform :scale="0.5" class="w-[200%]">
  <IsaWizardEmbed height="1000px" configUrl="/nested-config.json" />
</Transform>

---
layout: default
---

# Conclusion

<div class="mt-12 space-y-8 max-w-5xl mx-auto">
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-emerald-400">Recap</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        The ISA Wizard turns FAIR compliance from a spreadsheet battle into a guided, config-driven questionnaire — bridging Postdoc Paul and Data Manager Doro.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-blue-400">Proven Across Domains</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        One tool, one architecture — already serving MIAPPE, BrAPI4PSI, and MIMSA use cases, with more standards addable via config alone.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-red-400">Open Source</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        Available now on GitHub — try it, adapt the config for your own standard, or contribute.
      </p>
    </div>
  </div>
</div>

---
layout: end
---

# Thank you!

<div class="text-neutral/90 text-sm">
Manuel Feser · Patrick König · Daniel Arend · Sebastian Beier · Dennis Psaroudakis
<br/>
Sarah Fischer-Zielke · Rica Rehfeld · Marc Heuermann · Klára Panzarová · Uwe Scholz
</div>

<QRCode data-id="anchor1" value="https://github.com/ipk-bit/isa-wizard" :size="100" class="p-4"/>

<FancyArrow
  to="[data-id=anchor1]@(40%,50%)"
  from="[data-id=label]"
  arc=".2"
/>

<span class="absolute top-2/3 left-1/4 p-2" data-id="label">Scan Me!</span>
