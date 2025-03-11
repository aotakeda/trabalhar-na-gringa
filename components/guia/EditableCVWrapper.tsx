"use client";

import dynamic from "next/dynamic";

const EditableCV = dynamic(() => import("@/components/guia/EditableCV"), {
  ssr: false,
});

export default function EditableCVWrapper() {
  return <EditableCV />;
}
