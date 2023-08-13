import { Button, FormControl, FormErrorMessage, HStack, Input } from "@chakra-ui/react"

function CustomEditForm(){
    return <FormControl>
        <form>
            <HStack>
                <Input/>
                <FormErrorMessage />
                <Button>OK</Button>
            </HStack>
        </form>
    </FormControl>
}

export default CustomEditForm