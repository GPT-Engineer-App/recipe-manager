import { useState } from "react";
import { Box, Flex, Input, Table, Thead, Tbody, Tr, Th, Td, Image, Text, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, Select, Checkbox, Stack } from "@chakra-ui/react";
import { FaSearch, FaStar } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    brandLogo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MHx8fHwxNzEzNTMxMzcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["family friendly", "Asian", "BBQ"],
    cookingTime: "30 mins",
    mainIngredient: "Chicken",
    rating: 85,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZGlzaHxlbnwwfHx8fDE3MTM1MzEzNzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    name: "Sweet Asian BBQ Chicken",
    steps: ["Step 1: Prep the chicken", "Step 2: Mix the sauce", "Step 3: Grill the chicken"],
    ingredients: {
      2: ["1 lb chicken", "2 tbsp BBQ sauce"],
      3: ["1.5 lb chicken", "3 tbsp BBQ sauce"],
      4: ["2 lb chicken", "4 tbsp BBQ sauce"],
      6: ["3 lb chicken", "6 tbsp BBQ sauce"],
    },
    comments: [
      { user: "Jane Doe", comment: "Loved it!", rating: 92 },
      { user: "John Smith", comment: "Too spicy for my taste.", rating: 70 },
    ],
  },
  {
    id: 2,
    brandLogo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MHx8fHwxNzEzNTMxMzcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["vegetarian", "Italian", "Quick"],
    cookingTime: "15 mins",
    mainIngredient: "Pasta",
    rating: 90,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MHx8fHwxNzEzNTMxMzcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    name: "Quick Italian Pasta",
    steps: ["Step 1: Boil the pasta", "Step 2: Prepare the sauce", "Step 3: Mix and serve"],
    ingredients: {
      2: ["200g pasta", "100g tomato sauce"],
      3: ["300g pasta", "150g tomato sauce"],
      4: ["400g pasta", "200g tomato sauce"],
      6: ["600g pasta", "300g tomato sauce"],
    },
    comments: [
      { user: "Alice Brown", comment: "Very easy and quick!", rating: 95 },
      { user: "Bob White", comment: "Needs more seasoning.", rating: 85 },
    ],
  },
  {
    id: 3,
    brandLogo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MHx8fHwxNzEzNTMxMzcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["vegan", "Mexican", "Spicy"],
    cookingTime: "25 mins",
    mainIngredient: "Beans",
    rating: 88,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFucyUyMGRpc2h8ZW58MHx8fHwxNzEzNTMxMzcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    name: "Spicy Vegan Tacos",
    steps: ["Step 1: Prepare the beans", "Step 2: Make the salsa", "Step 3: Assemble the tacos"],
    ingredients: {
      2: ["1 can beans", "2 tbsp salsa", "4 taco shells"],
      3: ["1.5 cans beans", "3 tbsp salsa", "6 taco shells"],
      4: ["2 cans beans", "4 tbsp salsa", "8 taco shells"],
      6: ["3 cans beans", "6 tbsp salsa", "12 taco shells"],
    },
    comments: [
      { user: "Charlie Green", comment: "Delicious and fiery!", rating: 92 },
      { user: "Dana Blue", comment: "A bit too hot for me.", rating: 78 },
    ],
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [portionSize, setPortionSize] = useState("2");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    onOpen();
  };

  const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Flex direction="column" p={5}>
      <Box mb={4}>
        <Input placeholder="Search recipes (e.g., 'tags: Asian' or 'Chicken')" value={searchQuery} onChange={handleSearchChange} size="lg" rightElement={<FaSearch />} />
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Picture</Th>
            <Th>ID</Th>
            <Th>Brand</Th>
            <Th>Tags</Th>
            <Th>Cooking Time</Th>
            <Th>Main Ingredient</Th>
            <Th>Rating</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredRecipes.map((recipe) => (
            <Tr key={recipe.id} onClick={() => openRecipe(recipe)} cursor="pointer">
              <Td>
                <Image src={recipe.image} boxSize="100px" objectFit="cover" />
              </Td>
              <Td>{recipe.id}</Td>
              <Td>
                <Image src={recipe.brandLogo} boxSize="50px" objectFit="cover" />
              </Td>
              <Td>{recipe.tags.join(", ")}</Td>
              <Td>{recipe.cookingTime}</Td>
              <Td>{recipe.mainIngredient}</Td>
              <Td>
                <Flex align="center">
                  <FaStar color="orange" />
                  <Text ml={2}>{recipe.rating}</Text>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{selectedRecipe?.name}</DrawerHeader>
          <DrawerBody>
            <Image src={selectedRecipe?.image} w="100%" mb={4} />
            <Text mb={2}>Cooking Time: {selectedRecipe?.cookingTime}</Text>
            <Text mb={2}>Main Ingredient: {selectedRecipe?.mainIngredient}</Text>
            <Text mb={2}>Rating: {selectedRecipe?.rating}</Text>
            <Select onChange={(e) => setPortionSize(e.target.value)} value={portionSize}>
              <option value="2">2 Portions</option>
              <option value="3">3 Portions</option>
              <option value="4">4 Portions</option>
              <option value="6">6 Portions</option>
            </Select>
            <Box mt={4}>
              <Text fontSize="lg" mb={2}>
                Ingredients:
              </Text>
              {selectedRecipe?.ingredients[portionSize].map((ingredient, index) => (
                <Text key={index}>{ingredient}</Text>
              ))}
            </Box>
            <Box mt={4}>
              <Text fontSize="lg" mb={2}>
                Steps:
              </Text>
              {selectedRecipe?.steps.map((step, index) => (
                <Text key={index}>{step}</Text>
              ))}
            </Box>
            <Box mt={4}>
              <Text fontSize="lg" mb={2}>
                Comments:
              </Text>
              {selectedRecipe?.comments.map((comment, index) => (
                <Box key={index} mb={2}>
                  <Text fontWeight="bold">{comment.user}</Text>
                  <Text>{comment.comment}</Text>
                  <Flex align="center">
                    <FaStar color="orange" />
                    <Text ml={2}>{comment.rating}</Text>
                  </Flex>
                </Box>
              ))}
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Index;
