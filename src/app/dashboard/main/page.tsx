import { WidgetsGrid } from "@/components";



export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};

export default function MainPage() {
  return (
    <div className="text-black m-2">
      <h1 className="mt-2 text-3xl">Dasboard</h1>
      <span className="mt-2 text-xl">informacion general</span>

      <WidgetsGrid/>
    </div>
  );
}