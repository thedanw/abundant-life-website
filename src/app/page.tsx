import type { Metadata } from "next";
import Hero from "@/components/homepage/Hero";
import Welcome from "@/components/homepage/Welcome";
import ServiceTimes from "@/components/homepage/ServiceTimes";
import WatchOnline from "@/components/homepage/WatchOnline";
import CallToAction from "@/components/homepage/CallToAction";
import FAQ from "@/components/homepage/FAQ";

export const metadata: Metadata = {
  title: "Abundant Life Centre Mareeba | Pentecostal Church | Sunday 9:30am",
  description:
    "Welcome to Abundant Life Centre Mareeba — a Spirit-filled Pentecostal church in Far North Queensland. Sunday worship 9:30am. Community markets, missions, prayer ministry. Plan your visit today.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServiceTimes />
      <WatchOnline />
      <CallToAction />
      <FAQ />
    </>
  );
}
