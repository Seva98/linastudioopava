"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import type { ClassItem } from "@/lib/site-data";

import { MediaFrame } from "./media-frame";

type ClassCardProps = ClassItem;

function MovementMark() {
  return (
    <span className="movement-mark" aria-hidden="true">
      <Image src="/brand/lina-symbol.svg" alt="" width={529} height={488} />
    </span>
  );
}

export function ClassCard({ title, description, image, alt, details }: ClassCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  function openDialog() {
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <article className="class-card">
      <div className="class-card__visual">
        <MediaFrame src={image} alt={alt} className="class-card__media" sizes="(max-width: 768px) 82vw, (max-width: 960px) 44vw, 24vw" />
        <MovementMark />
      </div>
      <div className="class-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <button ref={triggerRef} type="button" className="arrow-link class-card__more" onClick={openDialog}>
          <span>Objevit více</span>
          <svg aria-hidden="true" viewBox="0 0 38 12">
            <path d="M0 6h35M30 1l5 5-5 5" />
          </svg>
        </button>
      </div>
      <dialog
        ref={dialogRef}
        className="class-dialog"
        aria-labelledby={titleId}
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className="class-dialog__panel">
          <button
            type="button"
            className="class-dialog__close"
            aria-label={`Zavřít detail lekce ${title}`}
            onClick={closeDialog}
          >
            <span aria-hidden="true" />
          </button>
          <p className="class-dialog__eyebrow">Naše lekce</p>
          <h2 id={titleId}>{title}</h2>
          <div className="class-dialog__content">
            {details.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.map((part, partIndex) =>
                  part.strong ? (
                    <strong key={partIndex}>{part.text}</strong>
                  ) : (
                    <span key={partIndex}>{part.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </div>
      </dialog>
    </article>
  );
}
