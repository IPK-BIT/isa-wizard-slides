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

<!--
FAIR data compliance is supposed to unlock scientific discovery, but for most researchers, it currently feels like an administrative tax on top of the actual science.
-->

---
layout: default
---

# The FAIRness Problem

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="border border-emerald-500/30 rounded-xl p-4 bg-emerald-500/5">
  <div class="flex items-center gap-4 mb-4">
    <img class="rounded-full w-32 h-32 object-cover" src="/paul.png" />
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

<div class="border border-red-500/30 rounded-xl p-4 bg-red-500/5">
  <div class="flex items-center gap-4 mb-4">
    <img class="rounded-full w-32 h-32 object-cover" src="/doro.png" />
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

<div class="mt-6 bg-gray-500/5 border border-gray-500/20 rounded-xl text-center shadow-sm">
  <p class="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-1">The Goal</p>
  <p class="text-lg font-bold text-gray-800 dark:text-gray-200 m-0">
    We need a tool to make FAIR compliance a habit, not a chore.
  </p>
</div>

<!--
I want to introduce to you Postdoc Paul and Data Manager Doro our personas within NFDI4Biodiversity. 
Paul just finished his experiment and wants now to publish the dataset so that he can move on to the next one. Doro send him an old ISA Tab dataset with the instruction to take a look on it and bring his own data into the ISA Tab format. He then works through multiple spreadsheets with for him unclear formatting. Naturally he sees FAIR compliance as an administrative tax on top of his actual research. 
Doro on the other side just wants to ensure that the data meets the institutional and repository data policies. She regularly finds missing fields, syntax errors and inconsistencies in the dataset and has to chase down Paul to get him to fix these errrors. So she spends a lot of time as a "spreadsheet detective".
To help both Paul and Doro, we decided that we need a tool to make FAIR compliance a habit, not a chore.
-->

---
layout: two-cols-header
layoutClass: gap-x-8
---

# The ISA Standard

Investigation – Study – Assay: a general-purpose metadata framework for life science experiments

::left::

![ISA hierarchical structure](/isa.png)

<div class="text-xs opacity-70 mt-1">
Investigation → Studies → Assays — each layer nests material/samples, characteristics, a protocol and its process parameters
</div>

<div class="absolute bottom-2 left-8 text-[.5rem] italic text-neutral-500">
Image adapted from https://arc-rdm.org
</div>



::right::

<div class="text-sm leading-snug">

<h3 class="text-teal-600 font-semibold tracking-wide uppercase text-xs mb-2">Two formats</h3>

<div class="flex items-start gap-2 mb-1.5">
  <mdi-file-table-outline class="text-teal-600 mt-0.5 shrink-0" />
  <div><span class="font-semibold">ISA-Tab</span> — tab-separated flat files, the original, human-readable format</div>
</div>

<div class="flex items-start gap-2 mb-5">
  <mdi-code-json class="text-teal-600 mt-0.5 shrink-0" />
  <div><span class="font-semibold">ISA-JSON</span> — JSON(-LD), API/DB-friendly, basis for application development</div>
</div>

<h3 class="text-teal-600 font-semibold tracking-wide uppercase text-xs mb-2">Good to know</h3>

<div class="flex items-start gap-2 mb-1.5">
  <mdi-earth class="opacity-60 mt-0.5 shrink-0" />
  <span>Domain-agnostic — genomics, metabolomics, plant sciences, ...</span>
</div>
<div class="flex items-start gap-2 mb-1.5">
  <mdi-sitemap class="opacity-60 mt-0.5 shrink-0" />
  <span>Models the whole workflow, not just the data</span>
</div>
<div class="flex items-start gap-2">
  <mdi-check-decagram class="opacity-60 mt-0.5 shrink-0" />
  <span>FAIR backbone, reused by standards like MIAPPE</span>
</div>

</div>

<!--
But first, let me give you a short overview of the ISA Standard.
ISA is a general-purpose metadata framework for life science experiments. 
It consists of three hierarchical layers. The investigation deals with the administrative metadata. Who is involved? What was the experiment about? The studies document how the materials was processed into samples. And assays describe how those samples were processed to generate the data. Materials and Samples can be described in more details through characteristics while protocols act as blueprints for the processes defining the parameters of a experimental step.
Classic ISA can be formatted in two formats. On the one side, there is ISA Tab as a spreadsheet based, human-readable format. On the other side, ISA-JSON is more API/DB friendly and basis for application development. 
The great thing about ISA is that it is domain agnostic. So you can use it in different omics contexts or even across different subdomains of life science. ISA is generic but yet powerful enough to model the whole experimental workflow from when you enter the genebank to select material to the point where you generate a plot for your journal publication. ISA acts as a FAIR backbone that can and is reused by other standards like MIAPPE.
However, this also makes it more complex for wet lab researchers to annotate their experiments. For example, in which ISA Tab file would you annotate MIAPPE's Start Date of Study? Obviously, in the investigation file.
-->

---
layout: default
---

<div class="h-full flex flex-col justify-center items-center text-center"> 
  <mdi-chat-question-outline class="text-7xl text-teal-600 mb-8" />
  <span class="text-teal-600 text-3xl">
  Ask questions. Not syntax.
  </span>
  <div class="mt-6 text-xl opacity-80 max-w-2xl"> 
  Empower researchers to seamlessly capture ontology-aligned metadata through an intuitive survey interface while enabling Data Stewards to iteratively adapt parameters and ISA data mappings as community standards evolve.
  </div> 
</div>

<!--
That is the reason why we came to the conclusion that it is more practical to ask the researcher questions instead of syntax. 
The ISA Wizard has therefore two objectives: It empowers researchers to capure ontology-aligned metadata intuitively. And it enables data stewards to provide tooling around their domain standards.
-->

---
layout: default
---

# Architecture & Design Principles

<div class="mt-12 space-y-8 max-w-5xl mx-auto">
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-emerald-400">01 / Dynamic UI</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        The System MUST provide reusable components that automatically synchronize with the ISA-JSON on the client-side state management.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-red-400">02 / Stewardship</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        The System MUST offer Data Stewards the ability to design the questionnaire, predefined parameters, and mapping to the ISA data model.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-blue-400">03 / Validation</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        The System MUST ensure that datasets are syntactically valid by design, relying on the official ISA-JSON schemas and programmatic instantiation.
      </p>
    </div>
  </div>
</div>

<div class="absolute bottom-4 left-8 text-[0.5rem] italic text-neutral-500">
* according to https://www.rfc-editor.org/info/rfc2119/
</div>

<!--
To guide the development, we have three main design principles that influence the ISA Wizard's architecture.
First, the Wizard provides reusable components that display and modify the ISA JSON dataset.
Second, the Wizard allows data stewards to define questionnaires tailored to their researchers needs, wording and domain standards.
And last, the ISA Wizard ensures that the dataset is syntactically valid by design, relying on the ISA JSON schemas
-->

---
layout: default
---

<div class="text-2xl font-mono font-bold text-emerald-400 mb-4">01 / Dynamic UI</div>

<Transform :scale="0.5" class="w-[200%]">
  <IsaWizardEmbed height="900px" configUrl="/dynamic-ui-config.json" />
</Transform>

<!--
When we jump into the wizard, we see that the UI is split into three columns. On the left side we have some navigation indicators, currently our progress is at 0% in the questionnaire. In the middle we see the current step of the questionnaire. An on the right side we see the current ISA JSON dataset. This is only for presentation purposes. Obviously this would not be something the real instance would render. 
In the middle form we see that it consists of seperate building blocks. If we now fill out e.g. the Investigation Identifier, we see that it automatically synchronizes the ISA JSON dataset. But we could also load an ISA JSON into the ISA Wizard and the UI would show the current version. Let's add e.g. the Investigation Title by writing into the title of the ISA JSON.
Besides the usual one line text, multi-line text, date picker, there are also more complex components like a license picker. Selecting a license we see that it maps not to a native property of ISA JSON, but to a comment with the key License. In the ISA Wizard, we don't need the user to understand where they need to place the License. We just need them to select the appropriate license.
Still those components are always 1:1 relationships to the ISA JSON dataset. But what if we want to manage e.g. a list of publications?
For this we can use the Publications component. If we add a publication it will allow us to edit the relevant metadata. When we now enter a DOI, the ISA Wizard will look up the publication using OpenAlex and fill out the title, the authors and the PubMed ID for us. Unfortunately, the publication status is not delivered by OpenAlex. We thus have to look up the correct ontology term using a TS4NFDI widget.
Similarly, the People component allows us to manage the contacts of the investigation. Here, we can also see the renaming of entities. We decided in this step to call the contacts not contacts but authors as this is the common wording in our user group. Because I hardly remember my ORCID, not to speak of the ORCID of my colleagues, the ORCID lookup allows to search for ORCIDs by the researchers name. This will then not only fill out the ORCID field, but also the name, email and affiliation.
When we finish the questionnaire, we  end up in the central management view. From here we can export our dataset into various formats like ISA Tab, ISA JSON or ARC and take a look at the currently version of the dataset or jump into the questionnaire again to update some missing fields. We can see that there are not study templates yet configured, so let's add a study template next.
-->

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
      "title": "Study Publications",
      "texts": ["Please provide information about the publications related to your study."],
      "component": {
        "type": "publications",
        "isaMapping": { "jsonPath": "publications" },
        "label": "Publications",
        "explanation": "Add publications related to your study."
      }
    }
  ]
}
```
````

<!--
To do this we simply add a "phenotyping-study" template to the configuration. A template has some metadata, such as the type, a label and a description.
Otherwise it defines the steps. So let's add our first step.
The step itself defines a title and some additional texts that provide more context to the user. Data stewards can also add a list of fields.
Fields are simple 1:1 components, that are mapped to one specific ISA property. There are different types, such as text, textarea or dates. But you also seen others like e.g. the license picker.
We also saw that the ISA Wizard has more complex components. If we add a new step, we can e.g. for our study template add a study design descriptors component.
-->

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

<div class="flex space-x-2 items-center">

<img class="w-1/3 h-fit" src="/isa4js.DM3Laubr_27H64G.webp" />
<img class="w-1/2 h-fit" src="/ARCtrl_horizontal.png" />

</div>

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

<!--
Finally, the ISA Wizard creates all ISA JSON objects programmatically. 
For this we have lookup functions, like this `addPublication` that lookup the respective schema and generate a new object from it. You can see on the right side, the ISA JSON publication_schema, that will create the respecitive ISA JSON publication object.
For the exports we rely on external libraries. Because ISA Tab generation in Javascript was not possible and the Python library, would require to run an additional service plus it is buggy, isa4js was implemented to handle the ISA Tab conversion. For ARC, we rely on the ARCtrl library, that Lukas presented yesterday.
-->

---
layout: section
---

# Use Cases

<!--
Coming to the Use Cases or Applications of the ISA Wizard
-->

---
layout: default
clicks: 3
---

# Use Cases

<div class="flex h-[450px] w-full gap-4">
  
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
    <div v-show="$slidev.nav.clicks === 0" class="w-full mt-4 flex-grow">
      <h3 class="text-center w-full font-bold text-xl mb-4">MIAPPE</h3>
      <ul class="list-disc pl-5">
        <li>Produce metadata compliant with MIAPPE</li>
        <li>Simplify capture of study design, environmental conditions and measured traits</li>
      </ul>
    </div>
    <div v-show="$slidev.nav.clicks !== 0" class="flex-grow flex items-center justify-center mt-4">
      <h3 class="whitespace-nowrap font-bold text-lg tracking-wider" style="writing-mode: vertical-rl; transform: rotate(180deg);">
        MIAPPE
      </h3>
    </div>
  </div>

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
    <div v-show="$slidev.nav.clicks === 1" class="w-full mt-4 flex-grow">
      <h3 class="text-center w-full font-bold text-xl mb-4">BrAPI4PSI</h3>
      <ul class="list-disc pl-5">
        <li>Integrates with BrAPI accessible data to generate ISA compliant metadata</li>
        <li>Support High-Throughput Phenotyping Facilities</li>
      </ul>
    </div>
    <div v-show="$slidev.nav.clicks !== 1" class="flex-grow flex items-center justify-center mt-4">
      <h3 class="whitespace-nowrap font-bold text-lg tracking-wider" style="writing-mode: vertical-rl; transform: rotate(180deg);">
        BrAPI4PSI
      </h3>
    </div>
  </div>

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
    <div v-show="$slidev.nav.clicks === 2" class="w-full mt-4 flex-grow">
      <h3 class="text-center w-full font-bold text-xl mb-4">MIMSA</h3>
      <ul class="list-disc pl-5">
        <li>Produce metadata compliant with MIMSA</li>
        <li>Facilitates metadata capture for animal studies, ensuring interdisciplinary interoperability</li>
      </ul>
    </div>
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
    <div v-show="$slidev.nav.clicks === 3" class="w-full mt-4 flex-grow">
      <h3 class="text-center w-full font-bold text-xl mb-4">What's Next</h3>
      <ul class="list-disc pl-5">
        <li>Architecture generalizes beyond phenotyping — any domain with a defined metadata standard can be onboarded via config</li>
        <li>Looking for incubator projects and new use cases — reach out if your domain needs FAIR-compliant metadata collection</li>
      </ul>
    </div>
    <div v-show="$slidev.nav.clicks !== 3" class="flex-grow flex items-center justify-center mt-4">
      <h3 class="whitespace-nowrap font-bold text-lg tracking-wider" style="writing-mode: vertical-rl; transform: rotate(180deg);">
        Future
      </h3>
    </div>
</div>

</div>

<!--
The ISA Wizard started in 2022 as the MIAPPE Wizard. We wanted to create a tool that provides biologists a user-friendly tool to annotate MIAPPE compliant ISA datasets. But we then realized that we can generalize the tool, to allow MIAPPE be integrated through a configuration. This lead to the ISA Wizard being born. 
The FAIRagro Use Case BrAPI4PSI was working on implementing a BrAPI server for the PSI software that is used by the IPK Phenosphere which you have the chance to visit this afternoon. Marc and Klara reached out to us whether the ISA Wizard could be used to provide additional metadata to this BrAPI server to implement a meaningful server.
Currently, we work together with Sarah and Rica on the MIMSA standard. As you just learned in the talk by Sarah, MIMSA is a metadata standard for animal sciences. It is the first use case where the ISA Wizard leaves the plant science domain. During this year's ELIXIR Biohackathon, we will work on a MIMSA Wizard configuration. If you want to join, registration for online participation is still open.
Of course, if you have any other domain or metadata standard that you want to use the ISA Wizard for, feel free to reach out to any of us.
-->

---
layout: default
---

# Conclusion

<div class="mt-12 space-y-8 max-w-5xl mx-auto">
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-emerald-400">Recap</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        The ISA Wizard turns FAIR compliance from a spreadsheet battle into an intuitive questionnaire, bridging the gap between researchers and data managers.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-blue-400">Uses Across Domains</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        A single versatile tool already powering MIAPPE, BrAPI4PSI, and MIMSA use cases, with additional standards seamlessly integratable through simple configuration updates.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-[220px_1fr] gap-8 items-center">
    <div class="text-xl font-mono font-bold text-red-400">Open Source</div>
    <div>
      <p class="text-sm opacity-75 m-0">
        Fully open-source on GitHub, explore the repository, test the tool, adapt the configurations for your own community standards, or join in and contribute.
      </p>
    </div>
  </div>
</div>

<!--
With this, we come to the end of this talk where I presented you the ISA Wizard. Our tool to streamline ISA compliance from a spreadsheet battle into an intuitve questionnaire.
We have seen that the ISA Wizard can be used within different use cases by switching out the configuration.
Finally, feel free to explore, test and contribute to the tool on Github.
-->

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

<!--
Thank you for your attention. If you have any questions, I will be more than happy to answer.
-->

---
layout: default
---

<Transform :scale="0.5" class="w-[200%]">
  <IsaWizardEmbed height="1000px" configUrl="/nested-config.json" />
</Transform>
