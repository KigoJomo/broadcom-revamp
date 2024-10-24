import React from "react";
import CustomLink from "../CustomLink";

const CTA = () =>{
  return(
    <section className="py-12 md:py-24 flex flex-col items-center gap-6">
      <h3 className="text-foreground text-center">Interested in Partnering with Us?</h3>
      <CustomLink text={"Become a Partner"} href={'/contact'} />
    </section>
  )
}

export default CTA