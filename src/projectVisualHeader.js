const escapeHtml = (value) =>
  value.replace(
    /[&<>"]/g,
    (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character],
  );

const titleMarkup = (variant, title) => {
  const safeTitle = escapeHtml(title);

  if (variant === "finace" && /^FinAce$/i.test(title)) {
    return '<span>Fin</span><span class="project-visual-header__title-accent">Ace</span>';
  }

  if (variant === "sap-lsmw" && /^SAP LSMW$/i.test(title)) {
    return '<span>SAP</span><span class="project-visual-header__title-accent"> LSMW</span>';
  }

  return `<span>${safeTitle}</span>`;
};

const morvenesseIllustration = () => `
  <svg viewBox="0 0 320 240" role="presentation" aria-hidden="true" focusable="false">
    <g class="project-visual-header__art-muted">
      <ellipse cx="82" cy="46" rx="45" ry="15" />
      <path d="M37 46v36c0 8 20 15 45 15s45-7 45-15V46" />
      <path d="M37 79v35c0 9 20 16 45 16 11 0 22-2 30-4" />
      <path d="M37 112v31c0 9 20 16 45 16 10 0 19-1 27-4" />
      <circle cx="52" cy="78" r="3" class="project-visual-header__art-dot" />
      <circle cx="52" cy="111" r="3" class="project-visual-header__art-dot" />
      <circle cx="52" cy="143" r="3" class="project-visual-header__art-dot" />
    </g>
    <g class="project-visual-header__art-main">
      <path class="project-visual-header__art-panel" d="M176 48h76l34 34v116a10 10 0 0 1-10 10H176a10 10 0 0 1-10-10V58a10 10 0 0 1 10-10Z" />
      <path d="M252 48v28a8 8 0 0 0 8 8h26" />
      <path d="M184 170h82M184 184h64" class="project-visual-header__art-muted" />
      <path d="M190 144V125M211 144v-32M232 144v-45M253 144V91" />
      <path d="m188 114 22-18 21 5 23-24" class="project-visual-header__art-accent" />
      <circle cx="188" cy="114" r="4" class="project-visual-header__art-node" />
      <circle cx="210" cy="96" r="4" class="project-visual-header__art-node" />
      <circle cx="231" cy="101" r="4" class="project-visual-header__art-node" />
      <circle cx="254" cy="77" r="4" class="project-visual-header__art-node" />
    </g>
    <g class="project-visual-header__art-main">
      <rect class="project-visual-header__art-panel" x="104" y="96" width="78" height="118" rx="10" />
      <rect x="119" y="111" width="48" height="22" rx="3" class="project-visual-header__art-screen" />
      <rect x="119" y="146" width="12" height="12" rx="2" />
      <rect x="137" y="146" width="12" height="12" rx="2" />
      <rect x="155" y="146" width="12" height="12" rx="2" />
      <rect x="119" y="164" width="12" height="12" rx="2" />
      <rect x="137" y="164" width="12" height="12" rx="2" />
      <rect x="155" y="164" width="12" height="12" rx="2" />
      <rect x="119" y="182" width="12" height="12" rx="2" />
      <rect x="137" y="182" width="12" height="12" rx="2" />
      <rect x="155" y="182" width="12" height="12" rx="2" />
    </g>
  </svg>
`;

const finaceIllustration = () => `
  <svg viewBox="0 0 320 240" role="presentation" aria-hidden="true" focusable="false">
    <path class="project-visual-header__art-area" d="M32 198c38-23 61-64 98-58 35 6 58 24 93 4 29-16 46-45 70-68v122Z" />
    <path d="M32 198H296M44 198V91M44 198h236" class="project-visual-header__art-muted" />
    <g class="project-visual-header__art-muted">
      <path d="M44 166 82 135l39 5 37-38 38 2 37-28" />
      <path d="M44 184 82 154l39 3 37-28 38 2 37-24" stroke-dasharray="8 7" />
      <path d="M82 135v63M121 140v58M158 102v96M196 104v94M233 76v122" stroke-dasharray="4 7" />
    </g>
    <path d="M44 166 82 135l39 5 37-38 38 2 37-28" class="project-visual-header__art-accent" />
    <path d="M233 107c23-3 43-20 61-47" class="project-visual-header__art-accent project-visual-header__art-forecast" />
    <g class="project-visual-header__art-nodes">
      <circle cx="44" cy="166" r="5" /><circle cx="82" cy="135" r="5" /><circle cx="121" cy="140" r="5" />
      <circle cx="158" cy="102" r="5" /><circle cx="196" cy="104" r="5" /><circle cx="233" cy="76" r="5" />
      <circle cx="294" cy="60" r="7" />
    </g>
    <g transform="translate(43 29)">
      <circle cx="48" cy="48" r="37" class="project-visual-header__art-ring" />
      <path d="M48 11a37 37 0 0 1 33 53" class="project-visual-header__art-accent project-visual-header__art-ring-progress" />
      <circle cx="48" cy="48" r="20" class="project-visual-header__art-hole" />
    </g>
  </svg>
`;

const sapIllustration = () => `
  <svg viewBox="0 0 320 240" role="presentation" aria-hidden="true" focusable="false">
    <g class="project-visual-header__art-main">
      <path class="project-visual-header__art-panel" d="M20 77h49l20 20v68a7 7 0 0 1-7 7H20a7 7 0 0 1-7-7V84a7 7 0 0 1 7-7Z" />
      <path d="M69 77v15a7 7 0 0 0 7 7h13M29 116h40M29 131h40M29 146h28" />
      <path d="M95 125h24" class="project-visual-header__art-accent" />
      <path d="m111 117 8 8-8 8" class="project-visual-header__art-accent" />
      <rect class="project-visual-header__art-panel" x="127" y="91" width="67" height="69" rx="7" />
      <path d="M127 111h67M127 132h67M149 91v69M171 91v69" />
      <path d="M201 125h20" class="project-visual-header__art-accent" />
      <path d="m213 117 8 8-8 8" class="project-visual-header__art-accent" />
    </g>
    <g class="project-visual-header__art-map">
      <circle cx="229" cy="125" r="6" /><circle cx="249" cy="106" r="6" /><circle cx="249" cy="144" r="6" />
      <path d="m234 121 10-10M234 129l10 10" />
    </g>
    <path d="M259 125h15" class="project-visual-header__art-accent" />
    <path d="m267 117 8 8-8 8" class="project-visual-header__art-accent" />
    <g class="project-visual-header__art-main">
      <ellipse cx="294" cy="92" rx="20" ry="8" class="project-visual-header__art-panel" />
      <path d="M274 92v59c0 5 9 8 20 8s20-3 20-8V92M274 111c0 5 9 8 20 8s20-3 20-8M274 131c0 5 9 8 20 8s20-3 20-8" />
    </g>
    <path d="M37 57c27-18 58-18 83 0M195 59c27-17 61-17 88 2" class="project-visual-header__art-orbit" />
  </svg>
`;

const illustrations = {
  morvenesse: morvenesseIllustration,
  finace: finaceIllustration,
  "sap-lsmw": sapIllustration,
};

export const ProjectVisualHeader = ({ variant, title, subtitle }) => {
  const illustration = illustrations[variant];

  if (!illustration) return "";

  return `
    <div class="project-visual-header project-visual-header--${variant}" aria-hidden="true">
      <div class="project-visual-header__copy">
        <div class="project-visual-header__title">${titleMarkup(variant, title)}</div>
        <div class="project-visual-header__subtitle">${escapeHtml(subtitle)}</div>
        <span class="project-visual-header__rule"></span>
      </div>
      <div class="project-visual-header__art">${illustration()}</div>
    </div>
  `;
};

export const initProjectVisualHeaders = () => {
  document.querySelectorAll("[data-project-visual-header]").forEach((element) => {
    element.innerHTML = ProjectVisualHeader({
      variant: element.dataset.variant,
      title: element.dataset.title ?? "",
      subtitle: element.dataset.subtitle ?? "",
    });
  });
};
