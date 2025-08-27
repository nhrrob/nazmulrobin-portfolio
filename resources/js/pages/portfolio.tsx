import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    Code, 
    Zap, 
    Shield, 
    Download, 
    Upload, 
    Cpu, 
    CheckCircle, 
    Github, 
    Mail, 
    MapPin, 
    Phone,
    ExternalLink,
    Database,
    Globe,
    Terminal,
    Layers,
    Sparkles,
    Brain,
    Rocket
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import AppLogoIcon from '@/components/app-logo-icon';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';

export default function Portfolio() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Nazmul Robin - Full Stack Developer & WordPress Expert">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-background">
                {/* Header */}
                <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-2">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                    <Code className="size-4" />
                                </div>
                                <span className="font-bold">Nazmul Robin</span>
                            </div>
                        </div>
                        <nav className="flex items-center gap-4">
                            <AppearanceToggleDropdown />
                            {auth.user ? (
                                <>
                                    <Link href={route('dashboard')}>
                                        <Button variant="ghost">Dashboard</Button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link href={route('login')}>
                                        <Button variant="ghost">Log in</Button>
                                    </Link>
                                    <Link href={route('register')}>
                                        <Button className='hidden'>Get Started</Button>
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                            <Badge variant="secondary" className="mb-4">
                                <Sparkles className="mr-1 size-3" />
                                Full Stack Developer
                            </Badge>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl">
                                Hi, I'm{' '}
                                <span className="text-primary">Nazmul Robin</span>
                            </h1>
                            <p className="mb-8 text-xl text-muted-foreground lg:text-2xl">
                                Software professional with almost 10 years of experience, passionate about creating 
                                scalable web applications and WordPress solutions. Currently building innovative 
                                plugins at WPDeveloper.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <Button size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="mailto:robin.sust08@gmail.com">
                                        <Mail className="mr-2 size-4" />
                                        Get In Touch
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="https://github.com/nhrrob" target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 size-4" />
                                        View GitHub
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-20 bg-muted/50">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                                <Brain className="inline mr-3 size-8 text-primary" />
                                Technical Expertise
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                A comprehensive skill set built over years of professional development
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <Code className="size-10 text-primary mb-2" />
                                    <CardTitle>Programming Languages</CardTitle>
                                    <CardDescription>
                                        Core languages for building robust applications
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">PHP</Badge>
                                        <Badge variant="outline">JavaScript</Badge>
                                        <Badge variant="outline">TypeScript</Badge>
                                        <Badge variant="outline">C</Badge>
                                        <Badge variant="outline">C++</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Globe className="size-10 text-primary mb-2" />
                                    <CardTitle>Web Technologies</CardTitle>
                                    <CardDescription>
                                        Modern web development stack and standards
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">HTML5</Badge>
                                        <Badge variant="outline">CSS3</Badge>
                                        <Badge variant="outline">jQuery</Badge>
                                        <Badge variant="outline">Ajax</Badge>
                                        <Badge variant="outline">REST API</Badge>
                                        <Badge variant="outline">XML</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Layers className="size-10 text-primary mb-2" />
                                    <CardTitle>Frameworks & Libraries</CardTitle>
                                    <CardDescription>
                                        Powerful frameworks for rapid development
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Laravel</Badge>
                                        <Badge variant="outline">CodeIgniter</Badge>
                                        <Badge variant="outline">React.js</Badge>
                                        <Badge variant="outline">Vue.js</Badge>
                                        <Badge variant="outline">Bootstrap</Badge>
                                        <Badge variant="outline">Tailwind CSS</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Additional Skills Row */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                            <Card>
                                <CardHeader>
                                    <Database className="size-10 text-primary mb-2" />
                                    <CardTitle>Databases & CMS</CardTitle>
                                    <CardDescription>
                                        Data management and content systems
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">MySQL</Badge>
                                        <Badge variant="outline">MongoDB</Badge>
                                        <Badge variant="outline">WordPress</Badge>
                                        <Badge variant="outline">PrestaShop</Badge>
                                        <Badge variant="outline">OpenCart</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Terminal className="size-10 text-primary mb-2" />
                                    <CardTitle>Tools & Testing</CardTitle>
                                    <CardDescription>
                                        Development tools and testing frameworks
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Git</Badge>
                                        <Badge variant="outline">PHPUnit</Badge>
                                        <Badge variant="outline">Pest</Badge>
                                        <Badge variant="outline">Jest</Badge>
                                        <Badge variant="outline">Composer</Badge>
                                        <Badge variant="outline">npm</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Brain className="size-10 text-primary mb-2" />
                                    <CardTitle>AI & Modern Tools</CardTitle>
                                    <CardDescription>
                                        Cutting-edge AI tools and development environments
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">ChatGPT</Badge>
                                        <Badge variant="outline">Claude</Badge>
                                        <Badge variant="outline">GitHub Copilot</Badge>
                                        <Badge variant="outline">Augment Code</Badge>
                                        <Badge variant="outline">VS Code</Badge>
                                        <Badge variant="outline">Cursor</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-20">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                                <Rocket className="inline mr-3 size-8 text-primary" />
                                Professional Experience
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Nearly a decade of building innovative solutions and leading development teams
                            </p>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-1 max-w-4xl mx-auto">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-xl">Senior WordPress Developer</CardTitle>
                                            <CardDescription className="text-lg font-medium text-primary">
                                                WPDeveloper
                                            </CardDescription>
                                            <p className="text-sm text-muted-foreground mt-1">July 2021 - Present</p>
                                        </div>
                                        <Badge variant="secondary">Current</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>Contributed to developing WordPress plugins, enhancing functionality and user experience</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>Managed product development lifecycle with focus on timely delivery and market alignment</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>Conducted peer code reviews to ensure high standards in quality and performance</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-xl">Senior Software Engineer</CardTitle>
                                            <CardDescription className="text-lg font-medium text-primary">
                                                iHealthScreen Bangladesh Ltd.
                                            </CardDescription>
                                            <p className="text-sm text-muted-foreground mt-1">October 2020 - June 2021</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>Developed the myClassRoom application in Laravel, optimizing UX and database performance</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>Focused on scalable backend architecture and performance improvements</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-xl">Software Engineer</CardTitle>
                                            <CardDescription className="text-lg font-medium text-primary">
                                                Workspace InfoTech Limited
                                            </CardDescription>
                                            <p className="text-sm text-muted-foreground mt-1">April 2015 - September 2020</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>Developed and deployed custom web applications tailored to client requirements</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>Delivered optimized and maintainable code across various full-stack projects</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="py-20 bg-muted/50">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                                <Code className="inline mr-3 size-8 text-primary" />
                                Featured Projects
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Showcasing some of my most impactful work and contributions
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Zap className="size-8 text-primary" />
                                        <Badge variant="secondary">WordPress Plugin</Badge>
                                    </div>
                                    <CardTitle>Essential Addons for Elementor</CardTitle>
                                    <CardDescription>
                                        Popular WordPress plugin with focus on performance and accessibility improvements
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">PHP</Badge>
                                            <Badge variant="outline">WordPress</Badge>
                                            <Badge variant="outline">JavaScript</Badge>
                                            <Badge variant="outline">MySQL</Badge>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href="https://wordpress.org/plugins/essential-addons-for-elementor-lite/" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 size-4" />
                                                View Plugin
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Shield className="size-8 text-primary" />
                                        <Badge variant="secondary">Payment Plugin</Badge>
                                    </div>
                                    <CardTitle>Better Payment</CardTitle>
                                    <CardDescription>
                                        Donation-focused payment plugin with multiple gateway integrations including Stripe and PayPal
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">PHP</Badge>
                                            <Badge variant="outline">WordPress</Badge>
                                            <Badge variant="outline">Stripe API</Badge>
                                            <Badge variant="outline">PayPal</Badge>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href="https://wordpress.org/plugins/better-payment/" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 size-4" />
                                                View Plugin
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Layers className="size-8 text-primary" />
                                        <Badge variant="secondary">Figma Plugin</Badge>
                                    </div>
                                    <CardTitle>FigWP - Figma to WordPress</CardTitle>
                                    <CardDescription>
                                        Converts Figma designs into Elementor & Essential Addons widgets, streamlining the design-to-code workflow
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">TypeScript</Badge>
                                            <Badge variant="outline">Figma API</Badge>
                                            <Badge variant="outline">Jest</Badge>
                                            <Badge variant="outline">Git</Badge>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href="https://www.figma.com/community/plugin/1518548448458226210" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 size-4" />
                                                View Plugin
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Globe className="size-8 text-primary" />
                                        <Badge variant="secondary">Laravel App</Badge>
                                    </div>
                                    <CardTitle>myClassRoom</CardTitle>
                                    <CardDescription>
                                        Complete educational platform with multi-role dashboards for teachers, students, parents, and coordinators
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">Laravel</Badge>
                                            <Badge variant="outline">PHP</Badge>
                                            <Badge variant="outline">MySQL</Badge>
                                            <Badge variant="outline">JavaScript</Badge>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href="https://www.myclassroom.com.bd/" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 size-4" />
                                                View Project
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Database className="size-8 text-primary" />
                                        <Badge variant="secondary">CRM Solution</Badge>
                                    </div>
                                    <CardTitle>United CRM</CardTitle>
                                    <CardDescription>
                                        Full sales lifecycle support with notifications, task reminders, and comprehensive reporting tools
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">Laravel</Badge>
                                            <Badge variant="outline">PHP</Badge>
                                            <Badge variant="outline">MySQL</Badge>
                                            <Badge variant="outline">Ajax</Badge>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href="http://www.united-crm.com" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 size-4" />
                                                View Project
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <MapPin className="size-8 text-primary" />
                                        <Badge variant="secondary">Real Estate</Badge>
                                    </div>
                                    <CardTitle>Soda Red</CardTitle>
                                    <CardDescription>
                                        Property listing service with advanced search, filtering, and Google Maps integration for real estate agents
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">PHP</Badge>
                                            <Badge variant="outline">MySQL</Badge>
                                            <Badge variant="outline">Google Maps API</Badge>
                                            <Badge variant="outline">JavaScript</Badge>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href="http://www.soda.red" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 size-4" />
                                                View Project
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                                Let's Work Together
                            </h2>
                            <p className="mb-8 text-lg text-muted-foreground">
                                Ready to bring your ideas to life? I'm always excited to work on challenging projects
                                and collaborate with innovative teams.
                            </p>
                            <div className="grid gap-6 md:grid-cols-2 mb-8">
                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="flex items-center gap-3">
                                            <Mail className="size-6 text-primary" />
                                            <div className="text-left">
                                                <p className="font-medium">Email</p>
                                                <p className="text-sm text-muted-foreground">robin.sust08@gmail.com</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="size-6 text-primary" />
                                            <div className="text-left">
                                                <p className="font-medium">Location</p>
                                                <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <Button size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="mailto:robin.sust08@gmail.com">
                                        <Mail className="mr-2 size-4" />
                                        Send Email
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="https://www.linkedin.com/in/nhrrob/" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 size-4" />
                                        LinkedIn Profile
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t py-12">
                    <div className="container">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="flex items-center space-x-2">
                                <div className="flex aspect-square size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                    <Code className="size-4" />
                                </div>
                                <span className="font-bold">Nazmul Robin</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                © 2024 Nazmul Robin. Full Stack Developer & WordPress Expert.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
