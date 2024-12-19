import Link from "next/link";

export default function hobby(){
    return (
        <div>
        <Link href="/hobby"><li>Hobby</li>
        </Link>
            <h1>Hobbies</h1>
            <ul>
                <li>Reading books</li>
                <li>Watching fiction movies</li>
                <li>Learning and exploring new things</li>
            </ul>
        </div>
        
    );
}