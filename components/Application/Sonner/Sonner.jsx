'use client'
import React from "react";
// import { toast } from "@/components/ui/toast";
import { Button } from "../../ui/button";
import { Toaster,toast } from "sonner";
const SonnerDemo = () => {
  return (
    <div>
      {/* <Button
        onClick={() =>
          toast.add({
            title: "Event created",
            type: "success",
            description: "Sunday, December 3 at 9:00 AM",
          })
        }
      >
        Toast
      </Button> */}
      <Toaster />
      <button onClick={() => {toast('My first toast'),{}}}>Give me a toast</button>
    </div>
  );
};

export default SonnerDemo;
