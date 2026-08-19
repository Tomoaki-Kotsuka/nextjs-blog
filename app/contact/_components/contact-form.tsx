"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "../actions";

const initialState: ContactState = {};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">お名前</label>
        <input id="name" name="name" type="text" />
        {state.errors?.name && <p>{state.errors.name[0]}</p>}
      </div>
      <div>
        <label htmlFor="message">メッセージ</label>
        <textarea id="message" name="message" />
        {state.errors?.message && <p>{state.errors.message[0]}</p>}
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "送信中..." : "送信する"}
      </button>
      {state.success && <p>送信しました。</p>}
    </form>
  );
}
