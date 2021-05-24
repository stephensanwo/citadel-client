import React from "react";
import { Accordion, AccordionItem, Tag } from "carbon-components-react";
import { topBooks } from "../data/top_books";
import { recentBooks } from "../data/recent_books";

const ToolsAccordion = () => {
  return (
    <div>
      <div>
        <Accordion>
          <AccordionItem title="Top Books" open>
            <div>
              {topBooks.map((topBook, index) => (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#0f62fe",
                    cursor: "pointer",
                    marginTop: "0.2rem",
                  }}
                >
                  {topBook.length > 50
                    ? `${topBook.slice(0, 50)} ...`
                    : topBook}
                </p>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Recent Books" open>
            <div>
              {recentBooks.map((recentBook, index) => (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#0f62fe",
                    cursor: "pointer",
                    marginTop: "0.2rem",
                  }}
                >
                  {recentBook.length > 50
                    ? `${recentBook.slice(0, 50)} ...`
                    : recentBook}
                </p>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ToolsAccordion;
