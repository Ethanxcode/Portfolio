'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function NavigationBar() {
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id);
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    return (
        <>
            <NavigationMenu
                aria-label="Primary Navigation"
                className="container z-50 hidden min-w-[40%] justify-center gap-4 rounded-[4rem] border-b border-border/40 bg-black bg-opacity-10 py-4 backdrop-blur-lg sm:sticky sm:top-4 sm:flex dark:bg-opacity-20 dark:shadow-2xl dark:shadow-blue-500/[0.1]"
            >
                {/* className="hidden sm:flex sm:sticky sm:top-0 min-w-full bg-black bg-opacity-20 backdrop-blur-lg container py-4 justify-between border-b border-border/40" */}
                <Avatar
                    className="cursor-pointer"
                    onClick={() => scrolltoHash('hero')}
                >
                    <AvatarImage
                        src="https://github.com/Ethanxcode.png"
                        alt="@Ethanxcode"
                    />
                    <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <NavigationMenuList className="w-full justify-end">
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('about')}
                            aria-label="About"
                        >
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('experiences')}
                            aria-label="Experiences"
                        >
                            Experiences
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('projects')}
                            aria-label="Projects"
                        >
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('feedbacks')}
                            aria-label="Testimonials"
                        >
                            Testimonials
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('skills')}
                            aria-label="Skills"
                        >
                            Skills
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('contact')}
                            aria-label="Contact"
                        >
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Sheet>
                <SheetTrigger
                    className="container sticky top-0 z-10 flex justify-end bg-black bg-opacity-20 py-2 backdrop-blur-lg sm:hidden"
                    aria-label="Open Mobile Navigation Menu"
                >
                    <Menu />
                </SheetTrigger>
                <SheetContent className="w-1/3">
                    <NavigationMenu
                        aria-label="Mobile Navigation"
                        className="flex w-full flex-col"
                    >
                        <NavigationMenuList className="w-full flex-col justify-end pt-4">
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    onClick={() => scrolltoHash('hero')}
                                    aria-label="Home"
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    onClick={() => scrolltoHash('about')}
                                    aria-label="About"
                                >
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    onClick={() => scrolltoHash('experiences')}
                                    aria-label="Experiences"
                                >
                                    Experiences
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    onClick={() => scrolltoHash('projects')}
                                    aria-label="Projects"
                                >
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    onClick={() => scrolltoHash('feedbacks')}
                                    aria-label="Testimonials"
                                >
                                    Testimonials
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    onClick={() => scrolltoHash('skills')}
                                    aria-label="Skills"
                                >
                                    Skills
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    onClick={() => scrolltoHash('contact')}
                                    aria-label="Contact"
                                >
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </SheetContent>
            </Sheet>
        </>
    );
}
