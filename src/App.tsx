import { useMemo, useState } from "react";
import { ABILITY_DETAILS, type ClickDetail } from "./data/abilityDetails";
import { GRENADE_DETAILS } from "./data/grenadeDetails";
import { PRIMARY_DETAILS } from "./data/primaryDetails";
import { SECONDARY_DETAILS } from "./data/secondaryDetails";
import { SUPPORT_DETAILS } from "./data/supportDetails";
import { TACTICAL_DETAILS } from "./data/tacticalDetails";
import {
  COLUMNS,
  NUMERIC_COLUMNS,
  SLOT_KEY,
  SLOTS,
  catalogRows,
  type SlotId,
} from "./data/loadouts";

const DETAILS: Record<SlotId, Record<string, ClickDetail>> = {
  primary: PRIMARY_DETAILS,
  secondary: SECONDARY_DETAILS,
  grenade: GRENADE_DETAILS,
  ability: ABILITY_DETAILS,
  tactical: TACTICAL_DETAILS,
  support: SUPPORT_DETAILS,
};

export default function App() {
  const [slot, setSlot] = useState<SlotId>("primary");
  const [focus, setFocus] = useState("Assault Rifle");

  const columns = COLUMNS[slot];
  const key = SLOT_KEY[slot];
  const headers = ["Name", ...columns];
  const rows = useMemo(() => catalogRows(slot), [slot]);
  const wrapEffect = columns.includes("Effect") || columns.includes("Detonation");

  function selectSlot(id: SlotId) {
    setSlot(id);
    setFocus(catalogRows(id)[0]?.name ?? "");
  }

  const slotMeta = SLOTS.find((s) => s.id === slot)!;
  const clickDetail = DETAILS[slot][focus];

  return (
    <div className="page">
      <header>
        <h1>Halo 4 Loadouts</h1>
      </header>

      <div className="workspace">
        <nav className="tabs" aria-label="Loadout slots">
          <div className="tabs-grid">
            {SLOTS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`tab ${slot === s.id ? "is-active" : ""}`}
                aria-current={slot === s.id ? true : undefined}
                onClick={() => selectSlot(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </nav>

        <main className="catalog">
          <h2 className="visually-hidden">{slotMeta.label}</h2>
          <div className="catalog-pane">
            <div className="table-wrap">
              <table className={`compare ${wrapEffect ? "has-effect" : ""}`}>
                <thead>
                  <tr>
                    {headers.map((col) => (
                      <th
                        key={col}
                        className={col !== "Name" && NUMERIC_COLUMNS.has(col) ? "num" : undefined}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.label}
                      className={row.name === focus ? "is-focus" : undefined}
                      aria-selected={row.name === focus}
                      tabIndex={0}
                      onClick={() => setFocus(row.name)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setFocus(row.name);
                        }
                      }}
                    >
                      <td>{row.label}</td>
                      {row.cells.map((cell, i) => {
                        const col = columns[i];
                        return (
                          <td
                            key={`${row.label}-${col ?? i}`}
                            className={col && NUMERIC_COLUMNS.has(col) ? "num" : undefined}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {clickDetail ? (
              <section className="item-detail" aria-live="polite">
                <h3>{focus}</h3>
                <ul>
                  {clickDetail.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
          <div className="key">
            <dl className="glossary">
              {key.columns.map((item) => (
                <div key={item.term} className="glossary-row">
                  <dt>{item.term}</dt>
                  <dd>{item.meaning}</dd>
                </div>
              ))}
            </dl>
            {key.tips?.length ? (
              <section className="tips">
                <h3>{key.tips.length === 1 ? "Tip" : "Tips"}</h3>
                <dl>
                  {key.tips.map((item) => (
                    <div key={item.term} className="glossary-row">
                      <dt>{item.term}</dt>
                      <dd>{item.meaning}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
          </div>
        </main>
      </div>
      <p className="lede">Fan site, not affiliated with 343 Industries or Microsoft.</p>
    </div>
  );
}
