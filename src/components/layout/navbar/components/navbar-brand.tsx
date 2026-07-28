import Link from "next/link";

import Icon from "@/components/ui/icon";
import { companyConfig } from "@/config/company.config";
import { assetsConfig } from "@/config/assets.config";

export default function NavbarBrand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Icon
        src={assetsConfig.logoPrimary}
        alt={companyConfig.name}
        size="xl"
        variant="brand"
        priority
        className="h-8"
      />

      <span className="text-lg font-semibold">
        {companyConfig.name}
      </span>
    </Link>
  );
}