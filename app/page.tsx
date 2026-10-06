import Image from "next/image";
// import Counter from "@/components/Counter/Counter";
// import DialogDemo from '@/components/Dialog/Dialog.Demo.jsx'
// import DrawerDemo from '@/components/Drawer/DrawerDemo.jsx'
// import {CarouselSize} from '@/components/carousel/carouselDemo'
// import SheetNavbar from '@/components/SheetNavBar/Sheet'
import SonnerDemo from '@/components/Application/Sonner/Sonner.jsx'
import {ModeToggle} from '@/components/Application/ModeToggle/ModeToggle'
import Particle from '@/components/Application/Table/Table'

export default function Home() {
  return (
 <div className="">
  {/* Hello Welcome */}
  <ModeToggle/>
  <Particle/>
  {/* <DialogDemo/>
  <DrawerDemo/>
  <CarouselSize/>
  <SheetNavbar/> */}
  {/* <Counter/> */}
  <SonnerDemo/>
 </div>
  );
}
