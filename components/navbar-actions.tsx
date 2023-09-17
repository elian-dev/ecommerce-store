"use client"

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
    return ( 
        <div className="ml-auto flex items-center">
            <Button>
                <ShoppingBag
                    size={20}
                    color="white"
                />
            </Button>
            Navbar actions
        </div>
     );
}
 
export default NavbarActions;