pragma solidity ^0.4.15;
// Proof of Existence contract, version 2
contract ProofOfExistence2 {
    // state
    mapping (bytes32 => bool) private proofs;

    // calculate and store the proof for a document
    // *transactional function*
    function notarize(string document) public {
        bytes32 proof = proofFor(document);
        storeProof(proof);
    }

    // store a proof of existence in the contract state
    // *transactional function*
    function storeProof(bytes32 proof) private  {
        proofs[proof] = true;
    }

    // check if a document has been notarized
    // *read-only function*
    function checkDocument(string document) public view returns (bool) {
        bytes32 proof = proofFor(document);
        return hasProof(proof);
    }

    // helper function to get a document's sha256
    // *read-only function*
    // constant is replaced by 
    //   view -- can access the contract storage
    //   pure -- cannot access the contract storage
    function proofFor(string document) public pure returns (bytes32) {
        return sha256(document);
    }
    
    // returns true if proof is stored
    // *read-only function*
    function hasProof(bytes32 proof) private view returns (bool) {
        return proofs[proof];
    }
}
