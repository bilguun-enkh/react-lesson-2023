import exp from "constants";
import { composeArticleSlug, cutTextToLength, extractArticleIdFromSlug, slugify } from "../index";


const str = "The quick brown fox jumps over the lazy dog.";
const HW = "Hello World!"
const idk = "I don't know"
const test = "what"

describe("cutTextToLength", () => {
    it("should cut text to length", () => {
        expect(cutTextToLength(str, 20))
            .toBe("The quick brown fox ...");
    });


    it("should not cut text to length", () => {
        expect(cutTextToLength(str, 100)).toBe(str);
    });
});

describe('slugify', () => {
    it('Test 1 successful', () => {
        expect(slugify(HW))
            .toBe("hello-world")
    })
    it('Test 2 successful', () => {
        expect(slugify(idk)).toBe("i-dont-know")
    })
    it('Test 3 successful', () => {
        expect(slugify(test)).toBe('what')
    })
})

describe('composeArticleSlug', () => {
    it('Test 1 successful', () => {
        expect(composeArticleSlug(5, idk)).toBe('i-dont-know-5')
    })

})

const slugfied = composeArticleSlug(1, "player")
const slugfied2 = composeArticleSlug(69, "player")


describe('extractArticleIdFromSlug', () => {
    it('Test 1 successful', () => {
        expect(extractArticleIdFromSlug(slugfied)).toBe('1')
    })

    it('Test 2 successful', () => {
        expect(extractArticleIdFromSlug(slugfied2)).toBe("69")
    })
})
