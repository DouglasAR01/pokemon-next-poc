import { Skeleton } from "primereact/skeleton";
export default function ThePokemonListLoader() {
  return (
    <div className="col-12">
      <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
        <Skeleton size="10rem"></Skeleton>
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <Skeleton width="10rem" className="mb-2"></Skeleton>
            <Skeleton width="20rem" className="mb-2"></Skeleton>
            <Skeleton width="4rem" className="mb-2"></Skeleton>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <Skeleton shape="circle" size="2rem"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}
