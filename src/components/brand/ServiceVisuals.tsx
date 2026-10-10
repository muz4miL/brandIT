const MONO = "'Space Grotesk', sans-serif";

export function StrategyVisual() {
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label="Positioning framework diagram">
      <rect width="400" height="260" fill="#16150F" />
      <line x1="70" y1="200" x2="360" y2="200" stroke="#F2EEE2" strokeOpacity="0.25" />
      <line x1="70" y1="200" x2="70" y2="30" stroke="#F2EEE2" strokeOpacity="0.25" />
      <text
        x="360"
        y="222"
        textAnchor="end"
        fontFamily={MONO}
        fontSize="8"
        letterSpacing="1.5"
        fill="#A39E8C"
      >
        PREMIUM
      </text>
      <text x="70" y="22" fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="#A39E8C">
        CHARACTER
      </text>
      <circle cx="120" cy="160" r="4" fill="#F2EEE2" fillOpacity="0.4" />
      <circle cx="170" cy="90" r="4" fill="#F2EEE2" fillOpacity="0.4" />
      <circle cx="280" cy="150" r="4" fill="#F2EEE2" fillOpacity="0.4" />
      <circle
        cx="255"
        cy="70"
        r="34"
        fill="none"
        stroke="#C9F24E"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
      <circle cx="255" cy="70" r="5" fill="#C9F24E" />
      <text
        x="255"
        y="122"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="9"
        letterSpacing="2"
        fill="#F2EEE2"
      >
        YOU ARE HERE
      </text>
    </svg>
  );
}

export function IdentityVisual() {
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label="Identity system with colour and typography">
      <rect width="190" height="260" fill="#F2EEE2" />
      <text x="16" y="44" fontFamily={MONO} fontSize="34" fontWeight="700" fill="#16150F">
        Gg
      </text>
      <text x="16" y="66" fontFamily={MONO} fontSize="9" letterSpacing="2" fill="#6F6A5B">
        ARCHIVO / SPACE GROTESK
      </text>
      <text x="16" y="92" fontFamily={MONO} fontSize="11" letterSpacing="1" fill="#16150F">
        ABCDEFGHIJKLM
      </text>
      <text x="16" y="108" fontFamily={MONO} fontSize="11" letterSpacing="1" fill="#16150F">
        NOPQRSTUVWXYZ
      </text>
      <text x="16" y="124" fontFamily={MONO} fontSize="11" letterSpacing="1" fill="#6F6A5B">
        0123456789
      </text>
      <rect x="16" y="148" width="30" height="30" fill="#C9F24E" />
      <rect x="52" y="148" width="30" height="30" fill="#16150F" />
      <rect x="88" y="148" width="30" height="30" fill="#EE5A36" />
      <rect x="124" y="148" width="30" height="30" fill="#B9BCE8" />
      <text x="16" y="200" fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="#6F6A5B">
        IVORY / INK / SIGNAL RED / LAVENDER
      </text>
      <rect x="210" width="190" height="260" fill="#16150F" />
      <rect x="232" y="24" width="20" height="20" fill="#C9F24E" />
      <text x="260" y="39" fontFamily={MONO} fontSize="11" fill="#F2EEE2">
        the brandit.
      </text>
      <text x="232" y="90" fontFamily={MONO} fontSize="26" fontWeight="700" fill="#F2EEE2">
        Less noise.
      </text>
      <text x="232" y="118" fontFamily={MONO} fontSize="26" fontWeight="700" fill="#C9F24E">
        More meaning.
      </text>
      <rect x="232" y="150" width="70" height="24" fill="#C9F24E" />
      <text
        x="267"
        y="165"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="8"
        letterSpacing="1.5"
        fill="#16150F"
      >
        PRIMARY
      </text>
      <rect
        x="310"
        y="150"
        width="70"
        height="24"
        fill="none"
        stroke="#F2EEE2"
        strokeOpacity="0.4"
      />
      <text
        x="345"
        y="165"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="8"
        letterSpacing="1.5"
        fill="#F2EEE2"
      >
        GHOST
      </text>
      <text x="232" y="216" fontFamily={MONO} fontSize="7" letterSpacing="1.5" fill="#A39E8C">
        ONE SYSTEM — EVERY SURFACE
      </text>
    </svg>
  );
}

export function DigitalVisual() {
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label="Desktop and mobile page compositions">
      <rect width="400" height="260" fill="#16150F" />
      <rect x="22" y="30" width="250" height="156" fill="#F2EEE2" />
      <rect x="36" y="46" width="8" height="8" fill="#16150F" />
      <text x="52" y="54" fontFamily={MONO} fontSize="7" letterSpacing="1" fill="#16150F">
        THE BRANDIT.
      </text>
      <text
        x="242"
        y="54"
        textAnchor="end"
        fontFamily={MONO}
        fontSize="6"
        letterSpacing="1"
        fill="#6F6A5B"
      >
        WORK / STUDIO / CONTACT
      </text>
      <text x="36" y="96" fontFamily={MONO} fontSize="20" fontWeight="700" fill="#16150F">
        Good brands
      </text>
      <text x="36" y="118" fontFamily={MONO} fontSize="20" fontWeight="700" fill="#16150F">
        don&rsquo;t blend in.
      </text>
      <rect x="36" y="132" width="58" height="16" fill="#C9F24E" />
      <text
        x="65"
        y="143"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="6"
        letterSpacing="1"
        fill="#16150F"
      >
        START
      </text>
      <rect x="36" y="158" width="222" height="14" fill="#16150F" fillOpacity="0.08" />
      <rect x="120" y="196" width="54" height="8" fill="#F2EEE2" fillOpacity="0.3" />
      <rect
        x="302"
        y="56"
        width="76"
        height="150"
        fill="#F2EEE2"
        stroke="#16150F"
        strokeWidth="3"
      />
      <rect x="318" y="64" width="44" height="5" fill="#16150F" fillOpacity="0.25" />
      <text x="312" y="96" fontFamily={MONO} fontSize="10" fontWeight="700" fill="#16150F">
        Good brands
      </text>
      <text x="312" y="110" fontFamily={MONO} fontSize="10" fontWeight="700" fill="#16150F">
        don&rsquo;t blend in.
      </text>
      <rect x="312" y="122" width="40" height="14" fill="#C9F24E" />
      <rect x="312" y="146" width="56" height="5" fill="#16150F" fillOpacity="0.12" />
      <rect x="312" y="156" width="48" height="5" fill="#16150F" fillOpacity="0.12" />
      <rect x="312" y="174" width="56" height="24" fill="#16150F" fillOpacity="0.08" />
      <text x="22" y="238" fontFamily={MONO} fontSize="7" letterSpacing="1.5" fill="#A39E8C">
        ONE LAYOUT SYSTEM — 1440 / 768 / 390
      </text>
    </svg>
  );
}

export function CampaignsVisual() {
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label="Poster and social creative system">
      <rect width="400" height="260" fill="#16150F" />
      <rect x="24" y="26" width="92" height="150" fill="#EE5A36" />
      <text x="34" y="112" fontFamily={MONO} fontSize="21" fontWeight="700" fill="#EFE66A">
        OFF
      </text>
      <text x="34" y="136" fontFamily={MONO} fontSize="21" fontWeight="700" fill="#EFE66A">
        SCRIPT
      </text>
      <rect x="30" y="164" width="8" height="8" fill="#EFE66A" />
      <rect x="132" y="26" width="108" height="150" fill="#EFE66A" />
      <text x="142" y="76" fontFamily={MONO} fontSize="15" fontWeight="700" fill="#16150F">
        OFF
      </text>
      <text x="142" y="96" fontFamily={MONO} fontSize="15" fontWeight="700" fill="#16150F">
        SCRIPT
      </text>
      <text x="142" y="120" fontFamily={MONO} fontSize="15" fontWeight="700" fill="#16150F">
        VOL.02
      </text>
      <rect x="256" y="26" width="120" height="66" fill="#B9BCE8" />
      <text x="266" y="56" fontFamily={MONO} fontSize="12" fontWeight="700" fill="#16150F">
        SAY IT
      </text>
      <text x="266" y="72" fontFamily={MONO} fontSize="12" fontWeight="700" fill="#16150F">
        LOUDER.
      </text>
      <rect x="256" y="104" width="120" height="72" fill="#F2EEE2" />
      <text x="266" y="134" fontFamily={MONO} fontSize="12" fontWeight="700" fill="#16150F">
        ONE GRID.
      </text>
      <text x="266" y="150" fontFamily={MONO} fontSize="12" fontWeight="700" fill="#16150F">
        EVERY FORMAT.
      </text>
      <text x="24" y="216" fontFamily={MONO} fontSize="7" letterSpacing="1.5" fill="#A39E8C">
        A0 POSTER / 4:5 SOCIAL / 1:1 SOCIAL — SAME SYSTEM
      </text>
    </svg>
  );
}

export function ServiceVisual({ name }: { name: string }) {
  switch (name) {
    case "Brand strategy":
      return <StrategyVisual />;
    case "Visual identity":
      return <IdentityVisual />;
    case "Websites & digital experiences":
      return <DigitalVisual />;
    default:
      return <CampaignsVisual />;
  }
}
