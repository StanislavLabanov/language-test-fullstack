import { TestPageContent } from "@/components/testPageContent";
import { TestTake } from "@/types/testtake";

async function getTestData(test: string): Promise<TestTake> {
  const res = await fetch(`http://localhost:3000/api/tests/${test}`);
  if (!res.ok) {
    throw new Error("Failed to fetch test data");
  }
  return res.json();
}

const Test = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getTestData(slug);
  return <TestPageContent data={data} />;
};

export default Test;
